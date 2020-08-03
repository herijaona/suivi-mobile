import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Api } from '../api';
import { State } from '../../model/state';

import { Plugins } from '@capacitor/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Users } from '../../model/user';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  tok: any;
  token: any;
  url:any = "http://localhost:8000/apip";
  private currentUserSubject: BehaviorSubject<UtilsService>;
  public currentUser: {'name','email'};

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<UtilsService>(JSON.parse(localStorage.getItem('name')));
  }

  public get currentUserValue(): UtilsService{
    return this.currentUserSubject.value;
  }

  async isToken() : Promise<Users>{
    const { value }  = await Storage.get({ key: 'name'});
      this.tok = value;
      const istoken = Object.keys(JSON.parse(this.tok ))
        .map(k => JSON.parse(this.tok ));
      const tok = istoken['0']['token'];
      return tok;
  }

  state() {
    const headers = new HttpHeaders({
      'Accept': 'application/json' });
    return this.http.get<State>(this.url + '/api/states', { headers: headers })
    .pipe(
      tap(user => {
        console.log('state',user);
        return user;
      })
    )
  }

  async ordoVaccinations(): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + '/ordo_vaccinations',  { headers: headers }).toPromise();
  }

  async getPatients(): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + '/patients',  { headers: headers }).toPromise();
  }

  public ordoVaccinationId(id): Promise<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json' });
    return this.http.get(this.url + '/ordo_vaccinations/' + id +'',  { headers: headers }).toPromise();
  }

  /** Centre de sante **/
  async getCentreHealh(): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + '/centre_healths',  { headers: headers }).toPromise();
  }

  /** Centre de sante id **/
  async getCentreHealhId(id): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + '/centre_healths/' + id + '',  { headers: headers }).toPromise();
  }

  /** Vaccin  **/
  async getVaccin(): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + '/vaccins/',  { headers: headers }).toPromise();
  }

  /** Centre de sante id **/
  async gerVaccinId(id): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + '/vaccins/' + id + '',  { headers: headers }).toPromise();
  }

  /** Carnet de vaccinnation  **/
  async getCarnetVaccination(): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + '/carnet_vaccinations',  { headers: headers }).toPromise();
  }

  /** Carnet de vaccinnation id **/
  async getCarnetVaccinationId(id): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + '/carnet_vaccinations' + id + '',  { headers: headers }).toPromise();
  }

    /** Patient Carnet de vaccinnation  **/
    async getPatientCarnetVaccination(): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + '/patient_carnet_vaccinations/',  { headers: headers }).toPromise();
    }
  
    /** Patient Carnet de vaccinnation id **/
    async getPatientCarnetVaccinationId(id): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + '/patient_carnet_vaccinations/' + id + '',  { headers: headers }).toPromise();
    }

    /** Patient Carnet de vaccinnation  **/
    async getIntervationtVaccination(): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + '/intervention_vaccinations/',  { headers: headers }).toPromise();
    }
  
    /** Patient Carnet de vaccinnation id **/
    async getIntervationtVaccinationId(id): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + '/intervention_vaccinations/' + id + '',  { headers: headers }).toPromise();
    }

    /** Praticiens **/
    async getPraticiens(): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + '/praticiens/',  { headers: headers }).toPromise();
    }
  
    /** Praticiens id **/
    async getPraticiensId(id): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + '/praticiens/' + id + '',  { headers: headers }).toPromise();
    }

    /** Group famille **/
    async getGroupFamille(): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + '/group_families/',  { headers: headers }).toPromise();
    }
  
    /** Group famille id **/
    async getGroupFamilleId(id): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + '/group_families/' + id + '',  { headers: headers }).toPromise();
    }

    /** famille **/
    async getFamille(): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + '/families/',  { headers: headers }).toPromise();
    }
  
    /** famille id **/
    async getFamilleId(id): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + '/families/' + id + '',  { headers: headers }).toPromise();
    }


}
