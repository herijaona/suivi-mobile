import { Component, OnInit } from "@angular/core";
import { ModalController, Config, AlertController } from "@ionic/angular";
import { NewRdvComponent } from "./new-rdv/new-rdv.component";
import { PraticienService } from "src/app/services/praticien.service";
import { PatientService } from "src/app/services/patient.service";
import { AuthService } from "src/app/services/auth.service";
import { Storage } from "@ionic/storage";
import { IProposeRdv } from "src/app/Interfaces/propose-rdv.interface";

@Component({
  selector: "app-proposition-rdv",
  templateUrl: "./proposition-rdv.page.html",
  styleUrls: ["./proposition-rdv.page.scss"],
})

// TODO delete + Modifier
export class PropositionRdvPage implements OnInit {
  public patients;
  items: any = [];
  filterdItems: any = [];
  isItemAvailable = true;
  showSearchbar: boolean;
  changeColor = true;
  ios: boolean;
  constructor(
    public modalCtrl: ModalController,
    private praticienSrvc: PraticienService,
    private patienSrvc: PatientService,
    private config: Config,
    private authSrvc: AuthService,
    private storage: Storage,
    private alertCtrl: AlertController
  ) { }

  ionViewWillEnter() {
    this.initializeItems();
  }

  ngOnInit() {
    this.ios = this.config.get("mode") === "ios";
    this.initializeItems();
    this.getPatients();
  }

  initializeItems() {
    this.praticienSrvc
      .getAllProposeRdv(this.storage.get("_id"))
      .subscribe((data) => {
        // console.log("PropositionRdvPage -> initializeItems -> data", data);
        this.items = [...Array.from(this.regroupData(data))];
        this.filterdItems = [...this.items];
      });
  }

  filterItems(ev: any) {
    const query = ev.target.value.toLowerCase();
    // console.log("PropositionRdvPage -> getItems -> query", query);
    // console.log("PropositionRdvPage -> filterItems -> this.items", this.items);

    requestAnimationFrame(() => {
      if (!query || query === "") {
        this.filterdItems = [...this.items];
        return;
      }
      let temp: any = [];
      this.filterdItems = temp;

      [...this.items].forEach((item) => {
        let data: any = [];
        item.groups.forEach((res) => {
          if (query) {
            if (
              res.patient.firstName.includes(query) ||
              res.patient.lastName.includes(query) ||
              res.descriptionProposition.includes(query)
            ) {
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

  //TODO: format date

  regroupData(data) {
    const groups = data.reduce((groups, rdv) => {
      const date = rdv.dateProposition.split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(rdv);
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

  async openNewRdvModal() {
    const newRdvModal = await this.modalCtrl.create({
      component: NewRdvComponent,
      cssClass: "test-class",
      swipeToClose: true,
      componentProps: {
        patients: this.patients,
        test: "test",
      },
    });
    newRdvModal.onDidDismiss().then(() => {
      this.initializeItems();
    });
    return await newRdvModal.present();
  }

  async getPatients() {
    this.patienSrvc.getPatients().subscribe((data) => {
      // console.log("PropositionRdvPage -> getPatients -> data", data);
      this.patients = data;
    });
  }

  async deleteProprdv(id) {
    // TODO: confirm delete
    this.praticienSrvc.deletePropositionRdv(id).subscribe(() => {
      this.initializeItems();
    });
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "Delete",
      message: "Do you really want to delete it ?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            // console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Okay",
          handler: () => {
            // console.log("data deleted id" + id);
            this.deleteProprdv(id);
          },
        },
      ],
    });

    await alert.present();
  }
}
