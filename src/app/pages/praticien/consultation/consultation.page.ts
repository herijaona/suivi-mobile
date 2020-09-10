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
import { Router } from "@angular/router";
import { PraticienService } from "src/app/services/praticien.service";
import { ConsultationFilterComponent } from "./consultation-filter/consultation-filter.component";
import { IConsultation } from "src/app/Interfaces/praticien.interface";

@Component({
  selector: "app-consultation",
  templateUrl: "./consultation.page.html",
  styleUrls: ["./consultation.page.scss"],
})
export class ConsultationPage implements OnInit {
  // Gets a reference to the list element
  @ViewChild("List", { static: true }) List: IonList; // TODO : get all consultation list

  ios: boolean;
  dayIndex = 0;
  queryText = "";
  segment = "all";
  excludeTracks: any = [];
  shownSessions: any = [];
  consulations: IConsultation[] = [];
  consultShow: any = [];
  confDate: string;
  showSearchbar: boolean;
  filteredConsultation: any = [];
  public OKSTATUS = "Accepted";
  public NOPSTATUS = "Refused";
  public PENDSTATUS = "Pending";

  constructor(
    public alertCtrl: AlertController,
    public praticienSrvc: PraticienService, // TODO : list of data
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public user: PraticienService,
    public config: Config
  ) {}

  ngOnInit() {
    this.getConsultation();
    this.ios = this.config.get("mode") === "ios";
  }

  showAccepted() {
    if (this.segment == "all") {
      this.filteredConsultation = [...this.consultShow];
      return;
    }
    let temp: any = [];
    this.filteredConsultation = temp;

    [...this.consultShow].forEach((item) => {
      console.log("ConsultationPage -> filterItems -> item", item.groups);
      let data: any = [];
      item.groups.forEach((res) => {
        console.log("ConsultationPage  *** -> filterItems -> res", res);
        if (res.consultationStatus.includes("Accepted")) {
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

  getConsultation() {
    // Close any open sliding items when the  updates
    if (this.List) {
      console.log("ConsultationPage -> update -> this.List", this.List);
      this.List.closeSlidingItems();
    }
    //TODO: get timeline
    this.praticienSrvc.getListConsultation().subscribe((data: any) => {
      this.consulations = data; // Data from DB
      this.consultShow = this.regroupData(data); // Transformed data
      this.filteredConsultation = [...this.consultShow]; // Filtered data to show
    });
  }

  regroupData(data) {
    const groups = data.reduce((groups, consultations) => {
      /* console.log(
        "ConsultationPage -> regroupData -> consultationDate",
        consultations
      ); */
      const date = consultations.consultationDate.split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(consultations);
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

  // TODO : à Optimiser
  filterItems(ev: any) {
    const query = ev.target.value.toLowerCase();
    requestAnimationFrame(() => {
      if (!query || query === "") {
        this.showAccepted();
        return;
      }
      let temp: any = [];
      this.filteredConsultation = temp;

      [...this.consultShow].forEach((item) => {
        console.log("ConsultationPage -> filterItems -> item", item.groups);
        let data: any = [];
        item.groups.forEach((res) => {
          console.log("ConsultationPage  *** -> filterItems -> res", res);
          if (query && this.segment == "all") {
            if (
              res.type.includes(query) ||
              res.consultationObjet.includes(query) ||
              res.patient.includes(query)
            ) {
              console.log("ConsultationPage -> filterItems -> res", res);

              data.push(res);
            }
          } else {
            if (
              res.consultationStatus === "Accepted" &&
              (res.type.includes(query) ||
                res.consultationObjet.includes(query) ||
                res.patient.includes(query))
            ) {
              console.log("ConsultationPage -> filterItems -> res", res);

              data.push(res);
            }
          }
        });
        const a = {
          date: item.date,
          groups: data,
        };

        temp.push(a);
      });
    });
  }

  alert() {
    console.log("ok ++++ ");
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: ConsultationFilterComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { excludedTracks: this.excludeTracks },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludeTracks = data;
      this.getConsultation();
    }
  }

  async openSocial(network: string, fab: HTMLIonFabElement) {
    const loading = await this.loadingCtrl.create({
      message: `Posting to ${network}`,
      duration: Math.random() * 1000 + 500,
    });
    await loading.present();
    await loading.onWillDismiss();
    fab.close();
  }
}
