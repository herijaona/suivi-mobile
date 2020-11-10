import { Component, OnInit, ViewChild } from "@angular/core";
import { IUserPraticien } from "src/app/Interfaces/praticien.interface";
import { RendrezVousFilterComponent } from "./rendrez-vous-filter/rendrez-vous-filter.component";
import {
  AlertController,
  LoadingController,
  ModalController,
  IonRouterOutlet,
  ToastController,
  Config,
  IonList,
} from "@ionic/angular";
import { PraticienService } from "src/app/services/praticien.service";
import { Router } from "@angular/router";
import { PatientService } from "src/app/services/patient.service";
import { NewRdvComponent } from "./new-rdv/new-rdv.component";
import { DataTransformerService } from "src/app/services/data-transformer.service";
import { IRdvPatient } from "src/app/Interfaces/patient.interface";
import { GlobalElementInjectionService } from "src/app/services/global-element-injection.service";

@Component({
  selector: "app-rendez-vous",
  templateUrl: "./rendez-vous.page.html",
  styleUrls: ["./rendez-vous.page.scss"],
})
export class RendezVousPage implements OnInit {
  @ViewChild("List", { static: true }) List: IonList; // TODO : get all consultation list

  ios: boolean;
  dayIndex = 0;
  queryText = "";
  segment = "all";
  excludeTracksStates: any = [];
  excludeTracksTypes: any = [];
  shownSessions: any = [];
  rdvs: IRdvPatient[] = [];
  rdvShow: any = [];
  allBrute: any = [];
  confDate: string;
  showSearchbar: boolean;
  rdvFiltered: any = [];
  praticiens: IUserPraticien[];
  public REALIZED = "REALISE";
  public CANCELED = "ANNULE";
  public SCHEDULED = "PLANIFIER";
  public PENDING = "EN ATTENTE";
  STRING_DATE = "dateRdv";
  STRING2_DATE = "dateConsultation";
  constructor(
    public alertCtrl: AlertController,
    public patientSrvc: PatientService, // TODO : list of data
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public praticientSrvc: PraticienService,
    public config: Config,
    private dataTransformer: DataTransformerService,
    private globaleEl: GlobalElementInjectionService
  ) { }

  ngOnInit() {
    this.getAllData();
    this.ios = this.config.get("mode") === "ios";
    this.getPraticiens();
  }

  showAccepted() {
    this.rdvFiltered = this.dataTransformer.onlyAccepted(
      this.rdvFiltered,
      "status",
      this.REALIZED,
      this.segment
    );
  }

  async openNewRdvModal() {
    const newRdvModal = await this.modalCtrl.create({
      component: NewRdvComponent,
      cssClass: "test-class",
      swipeToClose: true,
      componentProps: {
        praticiens: this.praticiens,
        test: "test",
      },
    });
    newRdvModal.onDidDismiss().then(() => {
      this.updateRdvList();
    });
    return await newRdvModal.present();
  }

  getAllData() {
    this.patientSrvc.getAllRdv().subscribe((data: any) => {
      console.log("RendezVousPage -> getAllData -> data", data)
      this.rdvs = data;
      const result = this.allData(data, this.STRING_DATE, this.STRING2_DATE);
      this.allBrute = result;
      this.rdvShow = result.data;
      this.rdvFiltered = result.dataByDate;
    });
  }

  updateRdvList() {
    if (this.List) {
      this.List.closeSlidingItems();
    }
  }

  // TODO : exclude on filter
  filterItems(ev: any) {
    const query = ev.target.value.toLowerCase();
    requestAnimationFrame(() => {
      if (!query || query === "") {
        this.showAccepted();
        return;
      }
      this.rdvFiltered = this.dataTransformer.filterItems(
        query,
        ["objetConsultation", "vaccin"],
        "status",
        this.segment,
        this.rdvFiltered,
        "praticien",
        ["firstName", "lastName"]
      );
    });
  }

  alert() {
    console.log("ok ++++ ");
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: RendrezVousFilterComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        excludeTracksStates: this.excludeTracksStates,
        excludeTracksTypes: this.excludeTracksTypes,
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();

    if (data) {
      this.excludeTracksStates = data.states;
      this.excludeTracksTypes = data.types;
      this.rdvFiltered = this.dataTransformer.hideOnexclude(
        data.fuseData,
        ["type"],
        this.segment,
        this.rdvFiltered
      );
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

  getPraticiens() {
    // TODO APK: à decommenter
    // this.praticientSrvc.getAllPraticien().subscribe((data) => {
    //   this.praticiens = data;
    // });
  }

  alertAcceptRdv(id) {
    this.globaleEl.alertAccept(id, this.rdvs, "status", this.REALIZED);
  }

  alertRemoveRdv(id) {
    this.globaleEl.alertRemove(id, this.rdvs, "status", this.CANCELED);
  }

  allData(list, string_date = "date", string2_date = "date"): { data: any[]; dataByDate: { date: string; groups: any }[] } {
    let dataShow: any[] = [];
    list.forEach((element) => {
      const dataToPush = Object.assign(element, { show: true });
      dataShow.push(dataToPush);
    });
    const listByDate = this.regroupDataByDate([...dataShow], string_date, string2_date);
    const res = {
      data: dataShow,
      dataByDate: listByDate,
    };
    return res;
  }
  // Regrouper les données en fonction de la date
  regroupDataByDate(data, string_date, string2_date) {
    console.log("regroupDataByDate -> string_date **** ", string_date)
    const groups = data.reduce((groups, eachData) => {
      console.log("regroupDataByDate -> eachData", eachData)
      const true_date = eachData[string_date] !== undefined ? eachData[string_date].date : eachData[string2_date].date;
      const type_rdv = eachData[string_date] !== undefined ? "intervention" : "consultation";
      const result = Object.assign(eachData, { type: type_rdv });
      const date = true_date;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(result);
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
    console.log("regroupDataByDate -> sortedActivities", sortedActivities)
    return sortedActivities;
  }

  checkStatus(statusConsultation, etat) {
    if (statusConsultation == 0) {
      return this.PENDING;
    } else if (statusConsultation == 1) {
      if (etat == 0) {
        return this.SCHEDULED; // Bouton cancel
      } else {
        return this.REALIZED;
      }
    } else {
      return this.CANCELED;
    }
  }
}
