import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }

  getIsRole(){
    let role = [ 
      ["ROLE_ADMIN"], 
      ["ROLE_PATIENT"]
    ];
    return role;
  }
}
