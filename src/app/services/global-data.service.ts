import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
      console.log("GlobalDataService -> getCountry -> data", data)
    })
    return res;
  }

  getCity(id): Observable<any> {
    const res = this.http.get<any>(this.url_api + `city?id=${id}`);
    console.log("GlobalDataService -> constructor -> this.url_api + `city?id=${id}`", this.url_api + `city?id=${id}`)
    res.subscribe(data => {
      console.log("GlobalDataService -> getCity -> data", data)
    })
    return res;
  }


}
