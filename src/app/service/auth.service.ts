import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Api } from './api';

import { Users } from '../model/user';

import { Plugins } from '@capacitor/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const { Storage } = Plugins;

/**
 * Injectable
 */
@Injectable()
export class AuthService {
  _user: any;

  
  private currentUserSubject: BehaviorSubject<AuthService>;
  public currentUser: {'name','email'};
  tok: any;
  token: any;
  idd: any;
  username: any;
  cur: any;

  constructor(public api: Api,private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<AuthService>(JSON.parse(localStorage.getItem('name')));
   }

  public get currentUserValue(): AuthService{
    return this.currentUserSubject.value;
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(username: string, password: string) {
    let seq = this.api.post('login_check', {username, password});
    seq.subscribe(async (res: any) => {
      if (res) {
        const to = JSON.stringify(res);
        Storage.set({
          key: 'name',
          value: to
        });
        const { value }  = await Storage.get({ key: 'name'});
        this.tok = value;
        const istoken = Object.keys(JSON.parse(this.tok ))
          .map(k => JSON.parse(this.tok ));
        const tok = istoken['0']['token'];
          this.token = tok;  
        
      } else {
        console.log('error');
      }
    }, async err => {
      console.error('ERROR', err);
    });
    return seq;
  }


  public register(user: any): Observable<any> {
    return this.api.fetch('post', '/users', user);
  }

  user() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': "Bearer" + " " + this.token });
    return this.http.get<Users>('http://localhost:8000/apip/users', { headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
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

  async isToken() : Promise<Users>{
    const { value }  = await Storage.get({ key: 'name'});
      this.tok = value;
      if(this.tok){
      const istoken = Object.keys(JSON.parse(this.tok ))
        .map(k => JSON.parse(this.tok ));
      const tok = istoken['0']['token'];
      this.token = tok;
      return this.tok;
    }
  }

public userOne() {
    const promise1 = new Promise((resolve, reject) => {
      resolve(this.getUserDetails()) 
    });
    promise1.then((value:any) => {
      this.cur =  value.username;
    });
    return promise1;
  }   

  logout() {
    this._user = null;
  }

  _loggedIn(resp) {
    this._user = resp.user;
  }
}
