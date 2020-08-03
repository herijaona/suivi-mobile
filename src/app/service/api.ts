

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
/**
 * Api is a generic REST Api handler. Set your API url first.
 */

@Injectable()
export class Api {
    
    //url: string = 'http://localhost/php-login-registration-api/';
    url : string = "http://localhost:8000/api";

    constructor(private http: HttpClient) {}

    get(endpoint: string, header?: any) {
        if(header){            
            header = new HttpHeaders({
                'Accept': 'application/json',
                'Authorization': 'Basic  eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTM2ODkxOTQsImV4cCI6MTU5MzY5Mjc5NCwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJ1c2VybmFtZSI6ImFkbWluIn0.eJRm9zmpw6no-jmxKUaMzxMh28UNFd8BL98r-iN-L1qhhJ5UWO55aC3CR-ysWb8HWO3aJJPPnCKZvjXAF434j5LdBou9yEAaBfFt6e7OLig6NSYcwpldtVoczXH7uybVbT7pxopqPdP4LoLvHwbahDobyLo_2BiEQ_bfw4b6R020QyuxlveMymrZtoHRm6VD_diCyNttHTHXH5L2DKd2DrMhJ3CtGiAg-uzMexbFxYxAN5EYE_EQCot27A1k8Qdtge8WI7NVEdpSOweOTh3hI-aESxqJH0h_k9qOTyZVE8UlIFaBASsvG2p7jrwcBpyJwvvLIdCr9MFKM7hgYoAM_rUjDVGmI46v5SPLq56lMII5cuvKG3HRPDTarHU56rKHvYGpsoTS7j04fkdl0eqkr6AAt9rlsz1-SBSdz-16IDh2ATS3Lavp-PaM4Z85bjpo-CxOgcVvgIi3FjzpxZhNGIq9xKcXrWcDndD1tEGaXSFLUAwr8-FDW9xzp4gdsl-pNU9Iy9iZEFYXNgWw3c4riZFh-tOAgFJFfoGUTDtEg5dEag2j9JZvB9KN6IJvef72voyt8SKNVBXZEt0kcRPL3dTwey6Hwe1o3_iz2YcE8mwQ-SSZo5xZ6ssi-GjOPjX7-2mVadLjsD9U7yTeW5GOCLDahmLm7eV---b8-1V7uFQ'

            });
        }
        return this.http.get(this.url + '/' + endpoint,{headers:header});
    }

    post(endpoint: string, data_params: { [key: string]: any } = {}, reqOpts?: any) {
        let _data: any;
        _data = data_params;
        return this.http.post(this.url + '/' + endpoint, data_params, reqOpts);
    }

    put(endpoint: string, body: any, reqOpts?: any) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    }

    delete(endpoint: string, reqOpts?: any) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    }

    patch(endpoint: string, body: any, reqOpts?: any) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    }

    request(method: string, route: string, data?: any) {
                
        let header = new HttpHeaders({
            'Accept': 'application/json'
        });
        
        if (method === 'GET') {
            return this.get(route, data);
        }

        return this.http.request(method, this.url + route, {
            body: data,
            responseType: 'json',
            observe: 'body',
            headers:header
        });
    }

    public fetch(
        method: string = 'GET',
        resource: string = '',
        data_params: { [key: string]: any } = {},
        header: { [key: string]: string } = {}
      ) {
        let _data: any;
        let url = this.url + resource;
        _data = data_params;
    
        return this.http.request(method, url, {
          headers: new HttpHeaders(header),
          body: _data,
        });
      }
}
