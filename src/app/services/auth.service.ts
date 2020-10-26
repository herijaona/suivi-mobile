import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BehaviorSubject, from, Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Storage } from "@ionic/storage";
import { AlertController, LoadingController, Platform } from "@ionic/angular";
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
      this.checkToken(); // TODO: à decommenter
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

  login(credentials, loadinCtrl: LoadingController) {
    console.log("AuthService -> login -> credentials", credentials);
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
    });

    // TODO APK: à decommenter
    const res = this.http
      .post(`${this.url}/api/login_check`, credentials, {
        headers: header,
      })
      .pipe(
        tap((res) => {
          // console.log("*******", CONSTANT.stringifyParse(res));
          this.storage.set(TOKEN_KEY, res["token"]); // TODO : à decommenter
          // const testToken = {
          //   token:
          //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDA2NzA0MzAsImV4cCI6MTYwMDY3NDAzMCwicm9sZXMiOlsiUk9MRV9QQVRJRU5UIl0sInVzZXJuYW1lIjoicGF0In0.wCv7mjXJIsEOHWyaHxwZ7u9sLIQ9IYH5wxmXfzNgWgL9Ynm8R7QMB6lrE1NJAlYh2wHsUQ5fjiyt59tmXwIuZf2qqw4JEuRShYccKLUDSAon-V_BgNPVwXIBwVMzQi2LkdhTHB0f7CnHLf7b5apJ2t8qSTEtUUsNMqipzqIzvDCBIQvl8XhxXxL9ZUdDfJeW9r4tuiHGl0WcQaDdg5-GyATk3gZDrWW1UNdKYVA7o3CWoD66xgeAi072XY_W_MeH0nzDVyemX-48E4kYKNydDw7HB60D6xNTNsg5dEFCBriA7mZPc-MLJwWcKkGa8nLwEOGXWOnSKmm8_9DQO0TDg72uYK2yQHw3WzEQwWz2io84aj3B7wtvxD4YpK3K_x-zMDJQWzrpJAMxxe2dZlVgWArgIBmqowb30HkrInhjvFssLou_MBU6jdnAFogO188k1pXkS2CwIdaqB9Wzxn_5AXfM8XGTRwKlggBk36owdkdWKyli1SuHA4FlwWdHd5MW3i1RjkwrkzZfXk-cohAWJ_Phrz8aCb51u8nmaH1sCOC5WSGrgQTaenkczr26TYRVBrr54HFxGrGfhf5xKa5NP5uWFzlq2Z0q_bDgv8YKw8G9-y9nhE5dAS3GW0CEcwwBRRw4NRAWJ6HK3foHaskYR4Wi-oukqyTOG8p_H0zE0nE",
          // };
          // this.storage.set(TOKEN_KEY, testToken);
          this.user = this.helper.decodeToken(res["token"]);
          console.log(
            "AuthService -> login -> user",
            CONSTANT.stringifyParse(this.user)
          );
          this.authenticationState.next(true);
        }),
        catchError((e) => {
          if (e.error) {
            // this.showAlert(e.error.msg);
          }
          loadinCtrl.dismiss();
          throw new Error(e);
        })
      );
    return res;

    // TODO: à commenter pour Just pour les mock login 
    // let testToken;
    // if (credentials.username === "pat") {
    //   testToken = {
    //     token:
    //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDA2NzA0MzAsImV4cCI6MTYwMDY3NDAzMCwicm9sZXMiOlsiUk9MRV9QQVRJRU5UIl0sInVzZXJuYW1lIjoicGF0In0.wCv7mjXJIsEOHWyaHxwZ7u9sLIQ9IYH5wxmXfzNgWgL9Ynm8R7QMB6lrE1NJAlYh2wHsUQ5fjiyt59tmXwIuZf2qqw4JEuRShYccKLUDSAon-V_BgNPVwXIBwVMzQi2LkdhTHB0f7CnHLf7b5apJ2t8qSTEtUUsNMqipzqIzvDCBIQvl8XhxXxL9ZUdDfJeW9r4tuiHGl0WcQaDdg5-GyATk3gZDrWW1UNdKYVA7o3CWoD66xgeAi072XY_W_MeH0nzDVyemX-48E4kYKNydDw7HB60D6xNTNsg5dEFCBriA7mZPc-MLJwWcKkGa8nLwEOGXWOnSKmm8_9DQO0TDg72uYK2yQHw3WzEQwWz2io84aj3B7wtvxD4YpK3K_x-zMDJQWzrpJAMxxe2dZlVgWArgIBmqowb30HkrInhjvFssLou_MBU6jdnAFogO188k1pXkS2CwIdaqB9Wzxn_5AXfM8XGTRwKlggBk36owdkdWKyli1SuHA4FlwWdHd5MW3i1RjkwrkzZfXk-cohAWJ_Phrz8aCb51u8nmaH1sCOC5WSGrgQTaenkczr26TYRVBrr54HFxGrGfhf5xKa5NP5uWFzlq2Z0q_bDgv8YKw8G9-y9nhE5dAS3GW0CEcwwBRRw4NRAWJ6HK3foHaskYR4Wi-oukqyTOG8p_H0zE0nE",
    //   };
    // } else {
    //   testToken = {
    //     token:
    //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDA2NzE2MzIsImV4cCI6MTYwMDY3NTIzMiwicm9sZXMiOlsiUk9MRV9QUkFUSUNJRU4iXSwidXNlcm5hbWUiOiJwcmF0In0.H9dXiMlno-GwnWudmCRvdowfyPV_ErApPFTQb8gb73JHr9OUQwF9konoeBCOWS-DEl66dhRDFVYIPMsEbcacfkNPUFT6WZYP551Ory4HL--4kQuvbkoScuLQe8c2RcaSHKms1WZQq-Y-Gkvf3gmML4V6OUApC-vzSptFhokFqZTU8nNO8PmN8TPCw5NhyBxp4KqCF58dOPHl6n5ua449FZrS15YhjxOIiycnLmsjHHNVx2r-fqOj7RDkSwyMrrS-2NLqD-zBzEj1hWCmS-YXJYYqo2jV8jOFV_ln75P7Mycaic-ZIyCYOte3YgM7mtTZo4ZhZf3lPVLohl9y_E2qvGZZK2ArsduuER78drXSU7Af2LMIVkG_-XshIlSEmnV1gnVkObr8r4ofCbcqi-7Oh3TRXk-rPBzlrhhA6B4BqeJaJCqakJuSZLRkZuHGmRI80CKgnUNqPLQJ0PMFrHTInwDnLhVUSCnxrwZ2Ko_ZReQoSM_ILBrcudUMJ5hmtWlc0_qEhJUibKtKuzWTbjokhI2nXYNvK6OGBPzm8llugoFJTRGNmz7RKxPTJp_p8_cHd0wReIGiaDcvQfncXof4r3wSKgNIb3UpT1mxZxbEioEb6agks8oRmytlW_ta7CUVsg2ylgtsa-Alt8XVuFmMv4IROvxCxII8IisiNC-LITo",
    //   };
    // }

    // this.storage.set(TOKEN_KEY, testToken.token);
    // this.user = this.helper.decodeToken(testToken.token);
    // this.authenticationState.next(true);
    // return from<any>(testToken.token);
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
