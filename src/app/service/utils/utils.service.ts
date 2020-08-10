import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

import { State } from '../../model/state';

import { Plugins } from '@capacitor/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { DatePipe } from '@angular/common';
import * as moment from 'moment'

import { Users } from '../../model/user';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  tok: any;
  token: any;
  url:any = environment.url;
  private currentUserSubject: BehaviorSubject<UtilsService>;
  public currentUser: {'name','email'};
  authenticationState = new BehaviorSubject(false);

  constructor(private http: HttpClient, private plt: Platform,) { 
    this.currentUserSubject = new BehaviorSubject<UtilsService>(JSON.parse(localStorage.getItem('name')));
    this.plt.ready().then(() => {
      this.checkToken();
    })
  }

  public get currentUserValue(): UtilsService{
    return this.currentUserSubject.value;
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  async isToken() : Promise<Users>{
    const { value }  = await Storage.get({ key: 'name'});
      this.tok = value;
      const istoken = Object.keys(JSON.parse(this.tok ))
        .map(k => JSON.parse(this.tok ));
      const tok = istoken['0']['token'];
      return tok;
  }


  async checkToken() {
    const userToken = await this.getUserDetails();
    let tokenS = {};
    if(userToken && userToken.exp){
      if(userToken.exp < Date.now() / 1000){
        Storage.set({ key: 'name', value: '' });
        console.log("#CHECKTOKEN  token expired ");

        tokenS = {};
      }else {
        tokenS = userToken;
        console.log("#CHECKTOKEN  token not expired ");
        this.authenticationState.next(true);
      }
    }
    return tokenS;
  }

  async getUserDetails(): Promise<Users> {
    let payload;
    const { value }  = await Storage.get({ key: 'name'});
    this.tok = value;
    if(this.tok){
      const istoken = Object.keys(JSON.parse(this.tok ))
        .map(k => JSON.parse(this.tok ));
      const tok = istoken['0']['token'];
      this.token = tok;
        if (this.token) {
          payload = this.token.split('.')[1];
          payload = window.atob(payload);
          return JSON.parse(payload);
        } else {
          return null;
        }
    }  
  }

  
  /** Carnet de vaccinnation id **/
  async getCarnetVaccinationId(id): Promise<any> {
    this.token = await this.isToken(); 
    let dateNow =  moment(new Date()).format('YYYY-MM-DD')
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + 'carnet_vaccinations?patient=' + id + '&order[datePriseInitiale]=asc&datePriseInitiale[after]=' + dateNow,  { headers: headers }).toPromise();
  }


  /** Consultation id **/
  async getConsultationById(id): Promise<any> {
    this.token = await this.isToken(); 
    let dateNow =  moment(new Date()).format('YYYY-MM-DD')
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + 'intervation_consultations?patient=' + id + '&order[dateConsultation]=asc&dateConsultation[after]=' + dateNow,  { headers: headers }).toPromise();
  }

  async getInfoCurrentUser(): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
      
      return this.http.get(this.url + 'current_user_check',  { headers: headers }).toPromise();
  }

  /** Group famille List **/
  async getGroupFamilleListByPatient(id): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + 'families?patientChild=' + id ,  { headers: headers }).toPromise();
  }

  /** Group famille **/
  async getListMembresByGroup(id): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + 'families?groupFamily=' + id ,  { headers: headers }).toPromise();
  }

  /** Group famille **/
  async getGroupFamille(id): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + 'group_families?patient=' + id ,  { headers: headers }).toPromise();
  }

  state() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token  });
    return this.http.get<State>(this.url + '/states', { headers: headers })
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
    return this.http.get(this.url + 'ordo_vaccinations',  { headers: headers }).toPromise();
  }

  async getPatients(): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + 'patients',  { headers: headers }).toPromise();
  }

  public ordoVaccinationId(id): Promise<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token  });
    return this.http.get(this.url + 'ordo_vaccinations/' + id +'',  { headers: headers }).toPromise();
  }

  /** Centre de sante **/
  async getCentreHealh(): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + 'centre_healths',  { headers: headers }).toPromise();
  }

  /** Centre de sante id **/
  async getCentreHealhId(id): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + 'centre_healths/' + id + '',  { headers: headers }).toPromise();
  }

  /** Vaccin  **/
  async getVaccin(): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + 'vaccins/',  { headers: headers }).toPromise();
  }

  /** Centre de sante id **/
  async gerVaccinId(id): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + 'vaccins/' + id + '',  { headers: headers }).toPromise();
  }

  /** Carnet de vaccinnation  **/
  async getCarnetVaccination(): Promise<any> {
    this.token = await this.isToken();
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get(this.url + 'carnet_vaccinations',  { headers: headers }).toPromise();
  }

    /** Patient Carnet de vaccinnation  **/
    async getPatientCarnetVaccination(): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + 'patient_carnet_vaccinations/',  { headers: headers }).toPromise();
    }
  
    /** Patient Carnet de vaccinnation id **/
    async getPatientCarnetVaccinationId(id): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + 'patient_carnet_vaccinations/' + id + '',  { headers: headers }).toPromise();
    }

    /** Patient Carnet de vaccinnation  **/
    async getIntervationtVaccination(): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + 'intervention_vaccinations/',  { headers: headers }).toPromise();
    }
  
    /** Patient Carnet de vaccinnation id **/
    async getIntervationtVaccinationId(id): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + 'intervention_vaccinations/' + id + '',  { headers: headers }).toPromise();
    }

    /** Praticiens **/
    async getPraticiens(): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + 'praticiens/',  { headers: headers }).toPromise();
    }
  
    /** Praticiens id **/
    async getPraticiensId(id): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + 'praticiens/' + id + '',  { headers: headers }).toPromise();
    }

    
  
    /** Group famille id **/
    async getGroupFamilleId(id): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + 'group_families/' + id + '',  { headers: headers }).toPromise();
    }

    /** famille **/
    async getFamille(): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + 'families/',  { headers: headers }).toPromise();
    }
  
    /** famille id **/
    async getFamilleId(id): Promise<any> {
      this.token = await this.isToken();
      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer" + " " + this.token });
      return this.http.get(this.url + 'families/' + id + '',  { headers: headers }).toPromise();
    }


}
