import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserPraticien } from '../Interfaces/praticien.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  private url = environment.url_dev;
  private url_api = environment.url_dev_api;
  constructor(public http: HttpClient) { }

  getCountry(): Observable<any> {
    const res = this.http.get<any>(this.url_api + "country");
    res.subscribe(data => {
      // console.log("GlobalDataService -> getCountry -> data", data)
    })
    return res;
  }

  getCity(id): Observable<any> {
    const res = this.http.get<any>(this.url_api + `city?id=${id}`);
    // console.log("GlobalDataService -> constructor -> this.url_api + `city?id=${id}`", this.url_api + `city?id=${id}`)
    res.subscribe(data => {
      // console.log("GlobalDataService -> getCity -> data", data)
    })
    return res;
  }

  getCountryByPratictitionerFunction(_idPractitionerFunction) {
    const res = this.http.post(`${this.url_api}country/fonction`, { id_fonction: _idPractitionerFunction });
    return res;
  }

  getCityByPractitionerFunctionAndCountry(_idPractitionerFunction, _idCountry) {
    const res = this.http.post(`${this.url_api}city/fonction`, { id_fonction: _idPractitionerFunction, id_country: _idCountry });
    return res;
  }

  getPractitionerByFunctionCountryAndCity(_idPractitionerFunction, _idCountry, _idCity) {
    const res = this.http.post(`${this.url_api}praticien/fonction`, { id_fonction: _idPractitionerFunction, id_country: _idCountry, id_city: _idCity });
    return res;
  }

  getCenterHealthByCity(_idCity) {
    const res = this.http.post(`${this.url_api}praticien/centre`, { id: _idCity });
    return res;
  }

  getPraticienByCenter(_idCenter) {
    const res = this.http.post(`${this.url_api}centre/praticien`, { id: _idCenter });
    return res;
  }

}
