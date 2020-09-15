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
  public OKSTATUS = "Accepted";
  public NOPSTATUS = "Refused";
  public PENDSTATUS = "Pending";
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
    private dataTransformer: DataTransformerService
  ) {
    console.log("...................; rdv ");
  }

  ngOnInit() {
    console.log("................... rdv ");
    this.getAllData();
    this.ios = this.config.get("mode") === "ios";
    this.getPraticiens();
  }

  showAccepted() {
    this.rdvFiltered = this.dataTransformer.onlyAccepted(
      this.rdvFiltered,
      "status",
      this.OKSTATUS,
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
      this.rdvs = data; // Data from DB
      // this.rdvShow = this.regroupData(data); // Transformed data
      const result = this.dataTransformer.allData(data);
      this.allBrute = result;
      this.rdvShow = result.data;
      this.rdvFiltered = result.dataByDate;
    });
  }

  updateRdvList() {
    // Close any open sliding items when the  updates
    if (this.List) {
      this.List.closeSlidingItems();
    }
    //TODO: get timeline
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
        ["type", "status"],
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
    this.praticientSrvc.getAllPraticien().subscribe((data) => {
      console.log("RendezVousPage -> getPraticiens -> data", data);
      this.praticiens = data;
    });
  }
}
