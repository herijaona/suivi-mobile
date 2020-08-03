import { Injectable } from '@angular/core';
import { Api } from '../api';
import { Observable } from 'rxjs';
import { map, catchError, tap, } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import { Users } from '../../model/user';
import {HttpHeaders} from '@angular/common/http';

import {HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  header:any = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': 'Basic eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTM2ODk2MzcsImV4cCI6MTU5MzY5MzIzNywicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJ1c2VybmFtZSI6ImFkbWluIn0.I9C7MmBRNgi165ZHffVwhIq0SHdegRxOTWzJtPiNIgqAEq6u5QP3jfrU36eJ48N0SnxX8aCOQbYmFV9hmE4mXkNmBZLriUO6suXHJBzSk9TGevvf8GroVHCPi4rdbjdDQ8R6dTd8MSDZ-ttfAvsNHlZYwiHGpyubxwlwWXeHoh7Yr1KDUYoH1KTyvtcifSEcj0XMTDuvA7ZXiMQi_id_OeA9z_6fsW4dNiGpmQPXPnjHHqRj6hDh1T-2cPK8Dok-My4ZSDKbTb8DASL9rvkBZ6REZVxjgQ9MdmfirGz33CkDOp6iwYJ1L7BNPC8fAInW1n7_sfX2_wERtcLdKFo47uEQyHXib4rnxvcUmg3tMnb184gqJ4PYcNtpTY8xd9jyfnVi9uTP0rLnEG486K7i6WceaRKZC9_CZ_smmJFV8grl9rSaaK6la4Tnuk9SWUGKk2M-39lPJ64Wn07_thTjoZIbUBwA-qZkgJWHnfZt9VsZXn0uohRH6IFIp4_Q--a6cRrQ109v_RRRP42BDpSNw-34hHcZEU4PqI6JfUmIZaalreIFzi1WQT6DbiOvZCLoW3-WJeGistxSW2jMLD6KuQm6FUg2GNBIvGxBCa_ThnX_rIysVBRGFI440hl4FHex_ef2GPe8At6ukJp7NU4O3K9uZcYGLea3kOgSaaPkLk4'
  });

  constructor(public api: Api,private http: HttpClient) {}

  getDatas(){
    return this.http.get('http://localhost:8000/apip/users' ,{headers:this.header});
  }


}
