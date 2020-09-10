import { Component, OnInit, ViewChild } from "@angular/core";
import {
  IonList,
  AlertController,
  LoadingController,
  ModalController,
  IonRouterOutlet,
  ToastController,
  Config,
} from "@ionic/angular";
import { PraticienService } from "src/app/services/praticien.service";
import { Router } from "@angular/router";
import { IIntervention } from "src/app/Interfaces/praticien.interface";
import { findIndex } from "rxjs/operators";

@Component({
  selector: "app-intervention",
  templateUrl: "./intervention.page.html",
  styleUrls: ["./intervention.page.scss"],
})
export class InterventionPage implements OnInit {
  @ViewChild("List", { static: true }) List: IonList; // TODO : get all consultation list

  ios: boolean;
  dayIndex = 0;
  queryText = "";
  segment = "all";
  excludeTracks: any = [];
  shownSessions: any = [];
  intervention: IIntervention[] = [];
  interventionShow: any = [];
  confDate: string;
  showSearchbar: boolean;
  interventionFiltered: any = [];
  public OKSTATUS = "Accepted";
  public NOPSTATUS = "Refused";
  public PENDSTATUS = "Pending";

  constructor(
    public alertCtrl: AlertController,
    public praticienSrvc: PraticienService,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public config: Config
  ) {}

  ngOnInit(): void {
    this.getIntervention();
    this.ios = this.config.get("mode") === "ios";
  }

  getIntervention() {
    // Close any open sliding items when the  updates
    if (this.List) {
      console.log("ConsultationPage -> update -> this.List", this.List);
      this.List.closeSlidingItems();
    }
    //TODO: get timeline
    this.praticienSrvc.getListIntervention().subscribe((data: any) => {
      this.intervention = data; // Data from DB
      this.interventionShow = this.regroupData(data); // Transformed data
      this.interventionFiltered = [...this.interventionShow]; // Filtered data to show
    });
  }

  //TODO fileter item intervention

  regroupData(data) {
    const groups = data.reduce((groups, intervention) => {
      const date = intervention.date.split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(intervention);
      return groups;
    }, {});

    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        groups: groups[date],
      };
    });
    const sortedActivities = groupArrays.slice().sort(function (a, b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    return sortedActivities;
  }

  showAccepted() {
    if (this.segment == "all") {
      this.interventionFiltered = [...this.interventionShow];
      return;
    }
    let temp: any = [];
    this.interventionFiltered = temp;

    [...this.interventionShow].forEach((item) => {
      console.log("ConsultationPage -> filterItems -> item", item.groups);
      let data: any = [];
      item.groups.forEach((res) => {
        console.log("ConsultationPage  *** -> filterItems -> res", res);
        if (res.status.includes("Accepted")) {
          data.push(res);
        }
      });
      const a = {
        date: item.date,
        groups: data,
      };

      temp.push(a);
    });
  }

  alert() {
    console.log("ok ++++ ");
  }

  async alertAcceptIntervention(id) {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "Accept",
      message: "Do you really want to accept it ? ",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "OK",
          handler: () => {
            console.log("data accepted " + id);
            this.acceptIntervention(id);
          },
        },
      ],
    });
    await alert.present();
  }

  async alertRemoveIntervention(id) {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "Refuse",
      message: "Do you really want to refuse it ? ",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "OK",
          handler: () => {
            console.log("data refused " + id);
            this.removeIntervention(id);
          },
        },
      ],
    });
    await alert.present();
  }

  // TODO:change by id // actually it s his name
  acceptIntervention(id) {
    this.intervention.find((element) => element.id == id).status = "Accepted";
  }

  removeIntervention(id) {
    const el = (test) => test.id == id;
    this.intervention.find((element) => element.id == id).status = "Refused";
    const index = this.intervention.findIndex(el);
    console.log(el);
    this.intervention.slice(index);
  }
}
