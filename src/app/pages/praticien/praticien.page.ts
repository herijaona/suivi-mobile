import { Component, OnInit } from "@angular/core";
import { MenuController, Platform } from "@ionic/angular";
import { Router, RouterEvent } from "@angular/router";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { AuthService } from "src/app/services/auth.service";
import { PraticienService } from "src/app/services/praticien.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-praticien",
  templateUrl: "./praticien.page.html",
  styleUrls: ["./praticien.page.scss"],
})
export class PraticienPage implements OnInit {
  pages = [
    {
      title: "Tableau de bord",
      url: "/praticien/dashboard",
    },
    {
      title: "Vaccination",
      url: "/praticien/vaccination",
      children: [
        {
          url: "/praticient/vaccination/details",
        },
      ],
    },
    {
      title: "Consultation",
      url: "/praticien/consultation",
    },
    {
      title: "Intervention",
      url: "/praticien/intervention",
    },
    {
      title: "Rendez-vous",
      url: "/praticien/proposition-rdv",
    },
  ];
  selectedPath = "";
  name = "";
  fonction: String = "";

  constructor(
    private authService: AuthService,
    public menuCtrl: MenuController,
    private router: Router,
    private plt: Platform,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private praticienSrvc: PraticienService,
    private authSrvc: AuthService,
    private storage: Storage
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      // console.log("PraticienPage -> event", event);
      this.selectedPath = event.url;
    });

    if (this.selectedPath === "" || this.selectedPath === undefined) {
      this.selectedPath = "/praticien/proposition-rdv";
    }
    console.log("PraticienPage -> this.selectedPath", this.selectedPath);
  }
  async ngOnInit() {
    this.initializeApp();
  }
  async openFirst() {
    if (this.selectedPath == undefined) {
      this.selectedPath = this.router.url;
    }
    //setTimeout(()=> this.menuCtrl.toggle("first"), 10);
    this.plt.ready().then(() => {
      this.menuCtrl.get("first").then((element) => {
        this.splashScreen.hide();
        if (element.isActive) {
          setTimeout(() => element.toggle(), 10);
        }
      });
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.praticienSrvc.getInfoUserID().subscribe((data) => {
      this.storage.set("_id", data.data);
      this.praticienSrvc.getLocalUserInfo().subscribe((el) => {
        const { roles, username } = this.authSrvc.user;
        const praticien = {
          firstName: el.firstName,
          lastName: el.lastName,
          anotherData: { role: roles[0], username: username },
          phoneProfessional: el.phoneProfessional,
          fonction: el.fonction,
        };

        this.storage.set("praticien_info", praticien);

        this.name = `${praticien.firstName} ${praticien.lastName} ( ${praticien.anotherData.username} ) `;
        this.fonction = praticien.fonction;
      });
    });
  }

  logout() {
    this.authService.logout();
  }
}
