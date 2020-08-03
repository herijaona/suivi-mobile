import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
  } from '@angular/common/http';
import { AuthService } from './../service/auth.service';
import { SpinnerService } from '../service/spinner/spinner.service';

@Injectable()
export class JwtInterceptor {
    constructor( 
        private authService: AuthService, 
        private spinnerService: SpinnerService,   
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.spinnerService.show();
        let currentUser = this.authService.currentUserValue;
        if(currentUser && currentUser.token){
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ${currentUser.token}'
                }
            });
        }
       return next
       .handle(req)
       .pipe(
           tap((event: HttpEvent<any>) => {
               if(event instanceof HttpResponse){
                    this.spinnerService.hide();
               }
           }, (error) => {
            this.spinnerService.hide();
           })
       );
    }
}