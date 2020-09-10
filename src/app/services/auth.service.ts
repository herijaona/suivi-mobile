import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Storage } from "@ionic/storage";
import { AlertController, Platform } from "@ionic/angular";
import { CONSTANT } from "src/constant";
const TOKEN_KEY = environment.TOKEN_KEY;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private alertCtrl: AlertController,
    private plt: Platform
  ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  getToken() {
    return this.storage.get(TOKEN_KEY).then((token) => {
      if (token) {
        return token;
      } else {
        console.log("token doesn't exist yet");
        // throw new Error("token doesn't exist yet");
      }
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then((token) => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
          console.log(
            "AuthService -> checkToken -> CONSTANT.stringifyParse(this.user)",
            CONSTANT.stringifyParse(this.user)
          );
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }

  login(credentials) {
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
    });
    return this.http
      .post(`${this.url}/api/login_check`, credentials, {
        headers: header,
      })
      .pipe(
        tap((res) => {
          console.log("*******", CONSTANT.stringifyParse(res));
          this.storage.set(TOKEN_KEY, res["token"]);
          this.user = this.helper.decodeToken(res["token"]);
          console.log(
            "AuthService -> login -> user",
            CONSTANT.stringifyParse(this.user)
          );
          this.authenticationState.next(true);
        }),
        catchError((e) => {
          if (e.error) {
            this.showAlert(e.error.msg);
          }
          throw new Error(e);
        })
      );
  }

  logout() {
    this.storage.clear();
  }

  showAlert(msg) {
    let alert = this.alertCtrl.create({
      message: msg,
      header: "Error",
      buttons: ["OK"],
    });
    alert.then((alert) => alert.present());
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  getRole(): String {
    if (this.user) {
      return this.user["roles"];
    }
  }
}
