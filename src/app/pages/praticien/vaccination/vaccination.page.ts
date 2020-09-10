import { Component, OnInit, ViewChild } from "@angular/core";
import {
  IonList,
  Config,
  AlertController,
  LoadingController,
  ModalController,
  IonRouterOutlet,
  ToastController,
} from "@ionic/angular";
import { PraticienService } from "src/app/services/praticien.service";
import { IVaccination } from "src/app/Interfaces/praticien.interface";
import { Router } from "@angular/router";
import { DetailsComponent } from "./details/details.component";

@Component({
  selector: "app-vaccination",
  templateUrl: "./vaccination.page.html",
  styleUrls: ["./vaccination.page.scss"],
})
export class VaccinationPage implements OnInit {
  @ViewChild("List", { static: true }) List: IonList; // TODO : get all consultation list
  ios: boolean;
  vaccinations: IVaccination[] = [];
  vaccinationsShow: { date: String; groups: IVaccination[] }[] = [];
  filteredVaccinations: { date: String; groups: IVaccination[] }[] = [];
  showSearchbar: boolean;
  segment = "all";
  queryText = "";
  public OKSTATUS = "Accepted";
  public NOPSTATUS = "Refused";
  public PENDSTATUS = "Pending";

  constructor(
    private config: Config,
    private praticienSrvc: PraticienService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public user: PraticienService
  ) {}

  alert() {
    console.log("ok ++++ ");
  }

  ngOnInit() {
    this.ios = this.config.get("mode") === "ios";
    this.getListVaccinations();
  }

  getListVaccinations() {
    // Close any open sliding items when the  updates
    if (this.List) {
      console.log("ConsultationPage -> update -> this.List", this.List);
      this.List.closeSlidingItems();
    }
    //TODO: get timeline
    this.praticienSrvc.getListsVaccinations().subscribe((data: any) => {
      this.vaccinations = data; // Data from DB
      this.vaccinationsShow = this.praticienSrvc.regroupDataByDate(data);
      this.filteredVaccinations = [...this.vaccinationsShow];
    });
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

  async openDetailModal() {
    const newRdvModal = await this.modalCtrl.create({
      component: DetailsComponent,
      cssClass: "test-class",
      swipeToClose: true,
      componentProps: {
        // test: "test",
        data: "data",
      },
    });
    newRdvModal.onDidDismiss().then(() => {
      // this.initializeItems(); //event on dismiss
    });
    return await newRdvModal.present();
  }

  showAccepted() {
    if (this.segment == "all") {
      this.filteredVaccinations = [...this.vaccinationsShow];
      return;
    }
    let temp: any = [];
    this.filteredVaccinations = temp;

    [...this.vaccinationsShow].forEach((item) => {
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

  // TODO : à Optimiser
  filterItems(ev: any) {
    const query = ev.target.value.toLowerCase();
    requestAnimationFrame(() => {
      if (!query || query === "") {
        this.showAccepted();
        return;
      }
      let temp: any = [];
      this.filteredVaccinations = temp;

      [...this.vaccinationsShow].forEach((item) => {
        let data: any = [];
        item.groups.forEach((res) => {
          if (query && this.segment == "all") {
            if (res.patient.includes(query)) {
              data.push(res);
            }
          } else {
            if (res.status === "Accepted" && res.patient.includes(query)) {
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
}
