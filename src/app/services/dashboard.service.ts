import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private url = environment.url_dev;
  private url_api = environment.url_dev_api;
  private url_apip = environment.url_dev;
  
  constructor(private http: HttpClient) { }

  getPatientNumber(){
    return this.http.get(`${this.url_apip}praticien/nbpatient`);
  }

  getAgePatient(){
    return this.http.get(`${this.url_apip}praticien/agepatient`)
  }
}
