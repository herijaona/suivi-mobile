import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, from, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { AlertController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { AuthService } from "../auth.service";
import { switchMap, catchError, map, mergeMap } from "rxjs/operators";
import { GlobalInteraction } from 'src/app/pages/global.interaction';

const TOKEN_KEY = environment.TOKEN_KEY;

@Injectable({
  providedIn: "root",
})
export class HttpConfigInterceptorService implements HttpInterceptor {
  protected url = environment.url_dev;
  protected debug = true;

  constructor(
    private alerCtrl: AlertController,
    private storage: Storage,
    private authSvc: AuthService,
    private globalItem: GlobalInteraction
  ) { }
  // intercept(
  //   req: HttpRequest<any>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<any>> {
  //   console.log(
  //     "HttpConfigInterceptorService -> this.authSvc.isAuthenticated()",
  //     this.authSvc.isAuthenticated()
  //   );

  //   if (this.authSvc.isAuthenticated() === true) {
  //     const toke = this.authSvc.getToken();
  //     console.log("HttpConfigInterceptorService -> toke", toke);
  //     let cloneReq;
  //     return from(toke).pipe(
  //       switchMap((token) => {
  //         if (token) {
  //           cloneReq = req.clone({
  //             headers: req.headers.set("Authorization", "Bearer" + " " + token),
  //           });
  //         }

  //         if (!req.headers.has("Content-Type")) {
  //           cloneReq = req.clone({
  //             headers: req.headers.set("Content-Type", "application/json"),
  //           });
  //         }

  //         if (this.debug) {
  //           // req = req.clone({
  //           //   url: this.url + req.url + "?XDEBUG_SESSION_START=1",
  //           // });
  //           console.log("en debug");
  //         }

  //         return next.handle(cloneReq).pipe(
  //           map((event: HttpEvent<any>) => {
  //             if (event instanceof HttpResponse) {
  //             }
  //             return event;
  //           }),
  //           catchError((error: HttpErrorResponse) => {
  //             const status = error.status;
  //             const reason =
  //               error && error.error.reason ? error.error.reason : "";

  //             this.presentAlert(status, reason);
  //             return throwError(error);
  //           })
  //         );
  //       })
  //     );
  //   } else {
  //     next.handle(req);
  //   }
  // }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const promise = this.authSvc.getToken();
    return from(promise).pipe(
      mergeMap((token) => {
        let cloneReq = this.addToken(request, token);

        return next.handle(cloneReq).pipe(
          catchError((error) => {
            const status = error.status;
            // console.warn("LL: HttpConfigInterceptorService -> error", error.message)
            const reason =
              error && error.error.reason ? error.error.reason : "";

            this.presentAlert(status, reason);
            this.globalItem.dismissLoading();
            this.globalItem.presentToast("error " + status);

            return throwError(error);
          })
        );
      })
    );
  }

  private addToken(request: HttpRequest<any>, tok: any) {
    if (tok) {
      let clone: HttpRequest<any>;
      // headers.append("Access-Control-Allow-Origin", '*');
      // 	headers.append("Access-Control-Allow-Methods", 'POST, GET, OPTIONS, DELETE');
      // 	headers.append('Content-Type', 'application/json' );
      clone = request.clone({
        setHeaders: {
          Accept: "application/json",
          "Content-type": "application/json",
          // "Access-Control-Allow-Origin": '*',
          // "Access-Control-Allow-Methods": 'POST, GET, OPTIONS, DELETE',
          Authorization: `Bearer ${tok}`,
        },
      });
      return clone;
    } else {
      let clone: HttpRequest<any>;
      clone = request.clone({
        setHeaders: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });
      return clone;
    }
  }

  async presentAlert(status, reason) {
    const alert = await this.alerCtrl.create({
      header: status + " Error",
      subHeader: "Subtitle",
      message: reason,
      buttons: ["OK"],
    });

    await alert.present();
  }
}
