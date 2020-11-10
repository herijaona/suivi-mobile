import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPatient, IRegisterPatient, IVaccinPatient, IProfilePatient } from "../Interfaces/patient.interface";

import { from } from "rxjs";
import { CONSTANT } from "src/constant";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { IUserPraticien } from '../Interfaces/praticien.interface';

@Injectable({
  providedIn: "root",
})
export class PatientService {
  private url = environment.url_dev;
  private url_api = environment.url_dev_api;
  private url_apip = environment.url_dev;
  private rdvData;
  constructor(public http: HttpClient) { }

  // TODO Get Patients
  getPatients(): Observable<IPatient[]> {
    return this.http.get<IPatient[]>(this.url + "patients");
    // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
    //   map((data: any) => {
    //     return data.mockPatient;
    //   })
    // );
  }

  getAllRdv() {
    return this.http.get(`${this.url_apip}patients/rdv`);
    // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
    //   map((data: any) => {
    //     return data.mockRdvListPatient;
    //   })
    // );
  }

  getTracksRdv(excludeTracks?) {
    return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
      map((data: any) => {
        console.log("PatientService -> getTracksRdv -> data", excludeTracks);
        return data;
      })
    );
  }

  //TODO : Get Vaccin by patient
  getVaccinByPatient() {
    return this.http.get<IVaccinPatient[]>(`${this.url_apip}patients/vaccination`);

    // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
    //   map((data: any) => {
    //     return data.mockVaccinPatient;
    //   })
    // );
  }

  registerPatient(data: IRegisterPatient) {
    return this.http.post<IRegisterPatient>(`${this.url_api}users`, data);
    Object.keys(data).forEach((element) => {
      console.log("PatientService -> registerPatient -> element", element);
      console.log("register => ", data[element]);
    });
  }

  getProfile() {
    return this.http.get<IProfilePatient[]>(`${this.url_apip}patient/profile`);

    // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
    //   map((data: any) => {
    //     return data.mockPatientProfile;
    //   })
    // );
  }

  updateProfile(data) {
    return this.http.post(`${this.url_apip}patient/profile/edit`, data);
  }

  getAssociatedPraticians(): Observable<IUserPraticien[]> {
    const res = this.http.get<IUserPraticien[]>(`${this.url_apip}patients/praticien`);
    res.subscribe(data => {
      console.log("PatientService -> constructor -> res", data);
    })
    return res;
  }

  getFamily() {
    const res = this.http.get(`${this.url_apip}patients/family`);
    console.log("PatientService -> getFamily -> res", res)
    return res;
  }
}
