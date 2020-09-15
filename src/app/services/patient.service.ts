import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPatient } from "../Interfaces/patient.interface";

import { from } from "rxjs";
import { CONSTANT } from "src/constant";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PatientService {
  private url = environment.url_dev;
  private rdvData;
  constructor(public http: HttpClient) {}

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
    return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
      map((data: any) => {
        return data.mockRdvListPatient;
      })
    );
  }

  // TODO: mettre en hide pour plus de performance
  getTracksRdv(excludeTracks?) {
    return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
      map((data: any) => {
        console.log("PatientService -> getTracksRdv -> data", excludeTracks);
        return data;
      })
    );
  }
}
