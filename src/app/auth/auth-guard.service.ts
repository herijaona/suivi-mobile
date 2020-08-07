import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UtilsService } from '../service/utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public util: UtilsService) { }

  canActivate(): boolean  {
   return this.util.isAuthenticated();
  }
}
