import { Component, OnInit } from "@angular/core";
import { MenuController, NavController, Platform } from "@ionic/angular";
import { Router, RouterEvent } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { PraticienService } from "src/app/services/praticien.service";
import { Storage } from "@ionic/storage";
import { PatientService } from 'src/app/services/patient.service';
import { IProfilePatient } from 'src/app/Interfaces/patient.interface';

@Component({
  selector: "app-patient",
  templateUrl: "./patient.page.html",
  styleUrls: ["./patient.page.scss"],
})
export class PatientPage implements OnInit {
  pages = [
    {
      title: "Callendrier de vaccination",
      url: "/patient/vaccination",
    },
    {
      title: "Rendez-vous",
      url: "/patient/rendez-vous",
      // subPages: [
      //   {
      //     title: "Nouveau",
      //     url: "/patient/rendez-vous/nouveau",
      //   },
      //   {
      //     title: "En attente",
      //     url: "",
      //   },
      //   {
      //     title: "Valider",
      //     url: "",
      //   },
      //   {
      //     title: "Rejeter",
      //     url: "",
      //   },
      //   {
      //     title: "Proposition",
      //     url: "",
      //   },
      // ],
    },
    {
      title: "My Praticiens",
      url: "/patient/assoc-praticiens",
    },
    {
      title: "Famille",
      url: "/patient/family",
    },
  ];
  selectedPath = "";
  name;
  fonction;
  constructor(
    public menuCtrl: MenuController,
    private router: Router,
    private plt: Platform,
    private authSrvc: AuthService,
    private storage: Storage,
    public navCtrl: NavController,
    public patienSrv: PatientService
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
      // console.log("PatientPage -> this.selectedPath", this.selectedPath);
    });
  }
  async ngOnInit() {
    this.selectedPath = "/patient/rendez-vous";
    this.initialize();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  async openFirst() {
    //setTimeout(()=> this.menuCtrl.toggle("first"), 10);
    this.plt.ready().then(() => {
      this.menuCtrl.get("first").then((element) => {
        if (element.isActive) {
          setTimeout(() => element.toggle(), 10);
        }
        // console.log(
        //   "PatientPage -> openFirst -> element.offsetWidth",
        //   element.offsetWidth
        // );
      });
    });
  }
  logout() {
    this.authSrvc.logout();
  }

  initialize() {
    const { roles, username } = this.authSrvc.user;
    // console.log("PatientPage -> initialize -> username", username);
    // console.log("PatientPage -> initialize -> roles", roles);
    // this.name = `${username}`;
    this.patienSrv.getProfile().subscribe((data: IProfilePatient[]) => {
      const type = data[0].typePatient == 1 ? "Adult" : "Enfant";
      this.name = `${data[0].firstName}  ${data[0].lastName} (${type})`;
    });
    this.fonction = "patient";
  }

  async redirect(link) {
    // console.log("PatientPage -> redirect -> link", link);

    this.navCtrl.navigateForward(link);
  }
}
