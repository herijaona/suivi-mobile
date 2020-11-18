import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";
import { CONSTANT } from "src/constant";
import { PraticienService } from "./services/praticien.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.authenticationState.subscribe((state) => {
        if (state) {
          if (this.authService.getRole() == CONSTANT.ROLE_PATIENT) {
            // this.router.navigate(["patient/profile"]);
            // this.router.navigate(["/patient/rendez-vous"]);
            // this.router.navigate(["/patient/assoc-praticiens"]);
            this.router.navigate(["/patient/vaccination"]);
            // this.router.navigate(["/patient/family"]);
          } else if (this.authService.getRole() == CONSTANT.ROLE_PRATICIEN) {
            // this.router.navigate(["praticien"]);
            // this.router.navigate(["/praticien/proposition-rdv"]);
            // this.router.navigate(["/praticien/intervention"]);
            // this.router.navigate(["/praticien/consultation"]);
            // this.router.navigate(["/praticien/vaccination"]);
            this.router.navigate(["/praticien/assoc-patients"]);
            // this.router.navigate(["/praticien/profile"]);
            // this.router.navigate(["/praticien/rendez-vous"]);
          }
        } else {
          this.router.navigate(["login"]);
          // this.router.navigate(["register/patient"]);
          // this.router.navigate(["register/praticien"]);
          // this.router.navigate(["/patient/profile"]);
          // this.router.navigate(["/praticien/dashboard"]);
          // this.router.navigate(["/praticien/vaccination"]);
          // this.router.navigate(["/account-activation"]);
        }
      });
    });
  }
}
