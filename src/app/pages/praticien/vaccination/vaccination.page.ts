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
import { GlobalInteraction } from '../../global.interaction';
import { OrganizeComponent } from './organize/organize.component';
import { RealizeComponent } from './realize/realize.component';

@Component({
  selector: "app-vaccination",
  templateUrl: "./vaccination.page.html",
  styleUrls: ["./vaccination.page.scss"],
})
export class VaccinationPage implements OnInit {
  @ViewChild("List", { static: true }) List: IonList; // TODO : get all consultation list
  ios: boolean;
  vaccinations: IVaccination[] = [];
  vaccinationsShow: { patient: String, nomPatient: String; groups: IVaccination[] }[] = [];
  filteredVaccinations: { patient: String, nomPatient: String; groups: IVaccination[] }[] = [];
  showSearchbar: boolean;
  segment = "all";
  queryText = "";
  seeVaccination;
  // public OKSTATUS = "Accepted";
  // public NOPSTATUS = "Refused";
  // public PENDSTATUS = "Pending";

  constructor(
    private config: Config,
    private praticienSrvc: PraticienService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public user: PraticienService,
    public globalItem: GlobalInteraction
  ) { }

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
      console.log("LL: VaccinationPage -> getListVaccinations -> data", data)
      this.vaccinations = data;
      // this.vaccinationsShow = this.praticienSrvc.regroupDataByDate(data);
      this.vaccinationsShow = this.praticienSrvc.regroupDataByPatient(data);
      this.filteredVaccinations = this.asignOperation([...this.vaccinationsShow]);
      console.log("LL: VaccinationPage -> getListVaccinations -> this.filteredVaccinations", this.filteredVaccinations)
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

  async openDetailModal(_data, _isWithNoteBook = false) {
    const newRdvModal = await this.modalCtrl.create({
      component: DetailsComponent,
      cssClass: "test-class",
      swipeToClose: true,
      componentProps: {
        // test: "test",
        // data: this.findVaccinationRelated(id).res,
        data: _data,
        isWithNoteBook: _isWithNoteBook
      },
    });
    newRdvModal.onDidDismiss().then(() => {
      // this.initializeItems(); //event on dismiss
    });
    return await newRdvModal.present();
  }

  async openOrganizeModal(_data) {
    const newRdvModal = await this.modalCtrl.create({
      component: OrganizeComponent,
      cssClass: "test-class",
      swipeToClose: true,
      componentProps: {
        data: _data,
      },
    });
    newRdvModal.onDidDismiss().then(() => {
      this.getListVaccinations(); //event on dismiss
    });
    return await newRdvModal.present();
  }

  async openRealizeVaccModal(_data) {
    const newRdvModal = await this.modalCtrl.create({
      component: RealizeComponent,
      cssClass: "test-class",
      swipeToClose: true,
      componentProps: {
        data: _data
      },
    });
    newRdvModal.onDidDismiss().then(() => {
      this.getListVaccinations();
    });
    return await newRdvModal.present();
  }


  showAccepted() {
    // if (this.segment == "all") {
    //   this.filteredVaccinations = [...this.vaccinationsShow];
    //   return;
    // }
    // let temp: any = [];
    // this.filteredVaccinations = temp;

    // [...this.vaccinationsShow].forEach((item) => {
    //   console.log("ConsultationPage -> filterItems -> item", item.groups);
    //   let data: any = [];
    //   item.groups.forEach((res) => {
    //     console.log("ConsultationPage  *** -> filterItems -> res", res);
    //     if (res.status.includes("Accepted")) {
    //       data.push(res);
    //     }
    //   });
    //   const a = {
    //     date: item.date,
    //     groups: data,
    //   };

    //   temp.push(a);
    // })
    ;
  }

  // TODO : à Optimiser
  filterItems(ev: any) {
    // const query = ev.target.value.toLowerCase();
    // requestAnimationFrame(() => {
    //   if (!query || query === "") {
    //     this.showAccepted();
    //     return;
    //   }
    //   let temp: any = [];
    //   this.filteredVaccinations = temp;

    //   [...this.vaccinationsShow].forEach((item) => {
    //     let data: any = [];
    //     item.groups.forEach((res) => {
    //       if (query && this.segment == "all") {
    //         if (res.patient.includes(query)) {
    //           data.push(res);
    //         }
    //       } else {
    //         if (res.status === "Accepted" && res.patient.includes(query)) {
    //           data.push(res);
    //         }
    //       }
    //     });
    //     const a = {
    //       date: item.date,
    //       groups: data,
    //     };

    //     temp.push(a);
    //   });
    // });
  }

  // OPERATION
  public OPERATION_VACCIN_CALENDAR = "Vaccine Callendar";
  public OPERATION_INT_VACCINATION = "Intervention Vaccination";

  // _STATUS
  public GENERATE = "Généré"
  public PENDING = "En attente"
  public REJECTED = "Rejeté"

  public SCHEDULED = "Planifié"
  public REALIZED = "Réalisé"

  //_ACTION
  public ACTION_VOIR = "Voir"
  public ACTION_GENERATE_REJECT = "Generate_reject"
  public ACTION_ORGANIZED_REJECT = "Organized_reject"
  public ACTION_REALIZED = "Réalisé"
  public ACTION_NULL = ""


  checkOperation(data) {
    if (data.carnet != undefined && data.carnet != null) {
      if (data.statusVaccin == 1) {
        if (data.etat == 0) {
          Object.assign(data, { _status: this.SCHEDULED, _action: this.ACTION_REALIZED });
        } else if (data.etat == 1) {
          Object.assign(data, { _status: this.REALIZED, _action: this.ACTION_REALIZED });
        }
      } else if (data.statusVaccin == 0) {
        Object.assign(data, { _status: this.PENDING, _action: this.ACTION_ORGANIZED_REJECT });
      } else if (data.statusVaccin == 2) {
        Object.assign(data, { _status: this.REJECTED, _action: this.ACTION_NULL });
      }
      console.warn(">>>>>>>>>>>>>>>>>>>>>LL: VaccinationPage -> checkOperation -> data", data)

      return Object.assign(data, { operation: this.OPERATION_INT_VACCINATION });
    } else {
      if (data.statusVaccin == 1) {
        Object.assign(data, { _status: this.GENERATE, _action: this.ACTION_VOIR });
      } else if (data.statusVaccin == 0) {
        Object.assign(data, { _status: this.PENDING, _action: this.ACTION_GENERATE_REJECT });
      } else if (data.statusVaccin == 2) {
        Object.assign(data, { _status: this.REJECTED, _action: this.ACTION_NULL });
      }
      const result = Object.assign(data, { operation: this.OPERATION_VACCIN_CALENDAR })
      console.warn("LL: VaccinationPage -> checkOperation -> data", result)

      return result;
    }

  }

  asignOperation(filteredVaccinations): { patient: String, nomPatient: String; groups: IVaccination[] }[] {
    filteredVaccinations.forEach(element => {
      element.groups.forEach(data => {
        this.checkOperation(data);
      });
    });

    return filteredVaccinations;
  }

  watchVaccin(_data) {
    this.praticienSrvc.watchVaccin(_data.patient).subscribe((data) => {
      console.log("LL: watchVaccin -> _data", data);
      this.seeVaccination = data;
      this.openDetailModal(data);
    });
  }


  generateVaccin(_data) {
    this.globalItem.presentLoading();
    console.log("LL: generateVaccin -> _data", _data)
    this.praticienSrvc.generateVaccin(_data.id, _data.patient).subscribe((data) => {
      console.log("LL: generateVaccin -> data", data)
      this.getListVaccinations();
      this.globalItem.dismissLoading();
    })
  }

  rejectVaccin(_data) {
    this.globalItem.presentLoading();
    console.log("LL: generateVaccin -> _data", _data.id)
    this.praticienSrvc.rejectVaccin(_data.id).subscribe((data) => {
      console.log("LL: generateVaccin -> data", data);
      this.getListVaccinations();
      this.globalItem.dismissLoading();
    });
  }


  watchVaccinWithNotebook(_data) {
    console.log("LL: watchVaccinWithNotebook -> _data", _data)
    this.praticienSrvc.watchVaccinWithNotebook(_data.carnet).subscribe((data) => {
      console.log("LL: watchVaccin -> _data", data);
      this.seeVaccination = data;
      this.openDetailModal(data, true);
    });

  }

  rejectVaccinWithNotebook(_data) {
    console.log("LL: rejectVaccinWithNotebook -> _data", _data.id)
    this.globalItem.presentLoading();
    this.praticienSrvc.rejectVaccinithNotebook(_data.id).subscribe((data) => {
      console.log("LL: rejectVaccinWithNotebook -> data", data)
      this.getListVaccinations();
      this.globalItem.dismissLoading();
    });
  }

  async organizeVaccinWithNotebook(_data) {
    console.log("LL: organizeVaccinWithNotebook -> _data", _data)
    await this.praticienSrvc.watchVaccinWithNotebook(_data.carnet).subscribe(async (data: any) => {
      const dataToSend = {
        date: data[0].datePriseVaccin.date,
        idCarnet: _data.carnet,
        id: _data.id,
      }
      console.log("LL: organizeVaccinWithNotebook -> dataToSend", dataToSend)
      await this.openOrganizeModal(dataToSend);
    });
  }

}
