import { Injectable } from "@angular/core";
import {
  IProposeRdv,
  IPropositionRdv,
} from "../Interfaces/propose-rdv.interface";

import {
  IPraticienPropRdv,
  IIntervention,
} from "../Interfaces/praticien.interface";

import { IUserPraticien } from "../Interfaces/praticien.interface";
import { HttpClient } from "@angular/common/http";
import { CONSTANT } from "src/constant";
import { map } from "rxjs/operators";
import { Observable, of, from } from "rxjs";
import { IConsultation, IVaccination } from "../Interfaces/praticien.interface";
import { environment } from "src/environments/environment";

import * as moment from "moment";
import { Storage } from "@ionic/storage";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class PraticienService {
  private url = environment.url_dev;
  private userID;
  private praticien: any = {};
  constructor(
    private http: HttpClient,
    private storage: Storage,
    private authSrvc: AuthService
  ) {}

  loadMockData() {
    return this.http
      .get(CONSTANT.MOCK_DATA_JSON)
      .pipe(map(this.processData, this));
  }

  getInfoUserID() {
    const res = this.http.get<any>(this.url + "current_user_check");
    return res;
  }

  getLocalUserInfo(): Observable<IUserPraticien> {
    return this.http.get<IUserPraticien>(this.url + `getPraticienInfo`);
  }

  getUserIDByStorage() {
    return this.storage.get("_id");
  }

  processData(data: any) {
    return data;
  }
  // TODO Service propose rdv
  async proposeRdv(prop: IProposeRdv) {
    let test = {
      description: prop.description,
      patient: prop.patient,
      dateRdv: prop.dateRdv,
      heureRdv: prop.heureRdv,
      id: prop.id,
    };
    console.log(
      "PraticienService -> proposeRdv -> test -> send data $$$$$$$$$$$$$$$"
    );
    /* this.token = await this.isToken();
    const headers = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer" + " " + this.token,
    });
    CUSTOMSHOW.showAllElementJSON(test);
    this.http.post(this.url + "register_proposition", test, {
      headers: headers,
    }); */

    this.http
      .post<IProposeRdv>(this.url + "register_proposition", prop)
      .subscribe();
  }

  getAllProposeRdv(id): Observable<IPraticienPropRdv[]> {
    let dateNow = moment(new Date()).format("YYYY-MM-DD");
    const res = this.http.get<IPraticienPropRdv[]>(
      this.url +
        "proposition_rdvs?praticien=" +
        id +
        "&order[dateProposition]=asc&dateProposition[after]" +
        dateNow
    );
    return from(res);

    // return this.loadMockData().pipe(
    //   map((data: any) => {
    //     console.log("PraticienService -> constructor -> data", data);
    //     return data.mockPopositionRdvList;
    //   })
    // );
  }

  // TODO: Type consultation
  getTypeTrackConsultation() {
    return this.loadMockData().pipe(
      map((data: any) => {
        console.log(
          "PraticienService -> getTypeTrackConsultation -> data",
          data
        );
        return data.mockTrackConsultation.sort();
      })
    );
  }

  getListConsultation(): Observable<IConsultation[]> {
    return this.loadMockData().pipe(
      map((data: any) => {
        return data.mockConsultation;
      })
    );
  }

  getListsVaccinations(): Observable<IVaccination[]> {
    return this.loadMockData().pipe(
      map((data: any) => {
        return data.mockVaccination;
      })
    );
  }

  getListsVaccinationsByDate() {
    return this.regroupDataByDate(this.getListsVaccinations());
  }

  // TODO : regroup all data by date ( need Interface to just have date)
  regroupDataByDate(data) {
    const groups = data.reduce((groups, eachData) => {
      const date = eachData.date.split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(eachData);
      return groups;
    }, {});

    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        groups: groups[date],
      };
    });
    const sortedActivities = groupArrays.slice().sort(function (a, b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    return sortedActivities;
  }

  deletePropositionRdv(id) {
    return this.http.delete(this.url + `praticien_remove_proposition/${id}`);
  }

  getListIntervention(): Observable<IIntervention[]> {
    return this.loadMockData().pipe(
      map((data: any) => {
        return data.mockIntervention;
      })
    );
  }
}
