import { PatientService } from "src/app/services/patient.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { IUserPraticien } from "src/app/Interfaces/praticien.interface";
import {
  IRdvPatient,
  IVaccinPatient,
} from "src/app/Interfaces/patient.interface";
import { IonList, LoadingController, ModalController } from "@ionic/angular";
import { DataTransformerService } from "src/app/services/data-transformer.service";
import { InterventionComponent } from './intervention/intervention.component';
import { PraticienService } from 'src/app/services/praticien.service';

@Component({
  selector: "app-vaccination",
  templateUrl: "./vaccination.page.html",
  styleUrls: ["./vaccination.page.scss"],
})
export class VaccinationPage implements OnInit {
  @ViewChild("VaccinList", { static: true }) VaccinList: IonList;

  ios: boolean;
  dayIndex = 0;
  queryText = "";
  segment = "all";
  excludeTracksStates: any = [];
  excludeTracksTypes: any = [];
  shownSessions: any = [];
  vaccins: IVaccinPatient[] = [];
  vaccinsShow: any = [];
  allBrute: any = [];
  confDate: string;
  showSearchbar: boolean;
  vaccinsFiltered: any = [];
  praticiens: IUserPraticien[];
  public OKSTATUS = "REALISED";
  public PENDINGSTATUS = "PENDING";
  public PLANIFIED = "PLANIFIED";
  private STRING_DATE = "date_prise";

  public STATUS;
  constructor(
    private patientSrv: PatientService,
    private dataTransformer: DataTransformerService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private praticienSrv: PraticienService
  ) {
    console.log("VaccinationPage -> constructor");
    this.initializeItems();
  }

  checkStatus(status, etat) {
    if (status == 1) {
      return this.OKSTATUS;
    } else {
      if (etat == false) {
        return this.PENDINGSTATUS;
      } else {
        return this.PLANIFIED;
      }
    }
  }

  ngOnInit() {
    console.log("VaccinationPage -> ngOnInit -> ngOnInit");
    this.presentLoading();
  }
  filterItems(ev) {
    const query = ev.target.value.toLowerCase();
    requestAnimationFrame(() => {
      if (!query || query === "") {
        return;
      }
      const keys = ["vaccin"];
      this.vaccinsFiltered = this.dataTransformer.filterItems(
        query,
        keys,
        "status",
        this.segment,
        this.vaccinsFiltered
      );
    });
  }

  initializeItems() {
    // this.patientSrv.getCarnetVaccinationId(3);
    this.getAllVaccin();
    this.praticienSrv.getAllPraticien().subscribe(data => {
      console.log("VaccinationPage -> initializeItems -> data", data)
      this.praticiens = data;
    });

  }

  getAllVaccin() {
    this.patientSrv.getVaccinByPatient().subscribe((data) => {
      console.log("VaccinationPage -> getAllVaccin -> data", data);
      this.vaccins = data;
      this.vaccinsShow = this.dataTransformer.allData(data, this.STRING_DATE).data;
      this.vaccinsFiltered = this.dataTransformer.allData(data, this.STRING_DATE).dataByDate;
      this.loadingCtrl.dismiss();
    });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: "my-loading-class",
      spinner: "bubbles",
      translucent: true,
      duration: 10000,
    });

    await loading.present();
  }

  async openNewRdvModal(nom_vaccin) {
    console.log("VaccinationPage -> openNewRdvModal -> nom_vaccin", nom_vaccin)
    const newRdvModal = await this.modalCtrl.create({
      component: InterventionComponent,
      cssClass: "test-class",
      swipeToClose: true,
      componentProps: {
        praticiens: this.praticiens,
        nomVaccin: nom_vaccin,
      },
    });
    newRdvModal.onDidDismiss().then(() => {
      this.initializeItems();
    });
    return await newRdvModal.present();
  }
}
