import { PatientService } from "src/app/services/patient.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { IUserPraticien } from "src/app/Interfaces/praticien.interface";
import {
  IRdvPatient,
  IVaccinPatient,
} from "src/app/Interfaces/patient.interface";
import { IonList, LoadingController } from "@ionic/angular";
import { DataTransformerService } from "src/app/services/data-transformer.service";

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
    private loadingCtrl: LoadingController
  ) { }

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

    this.initializeItems();
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
  }

  getAllVaccin() {
    this.patientSrv.getVaccinByPatient().subscribe((data) => {
      console.log("VaccinationPage -> getAllVaccin -> data", data)
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
}
