import { Component, OnInit } from "@angular/core";
import { UtilsService } from "src/app/service/utils/utils.service";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
@Component({
  selector: "app-patient-rendez-vous",
  templateUrl: "./patient-rendez-vous.component.html",
  styleUrls: ["./patient-rendez-vous.component.scss"],
})
export class PatientRendezVousComponent implements OnInit {
  items: any = [];
  isItemAvailable = true;

  urlPropositionRdv = "/praticien/patient-rendez-vous/proposition";
  constructor(private service: UtilsService) {
    this.initializeItems();
  }

  async ngOnInit() {
    //this.initializeItems();
  }

  /* initializeItems() {
    this.items = [
      {
        name: "Caroline Loa",
        date: "05/04/2020",
        content: "Lorem ipsum dolor",
      },
      {
        name: "Lindsa pay",
        date: "07/04/2020",
        content: "Lorem ipsum dolor",
      },
      {
        name: "Lindsa pay",
        date: "05/04/2020",
        content: "Lorem ipsum dolor",
      },
    ];
  } */

  async initializeItems() {
    this.getAllRdv();
  }

  getItems(ev: any) {
    this.initializeItems();
    const val = ev.target.value;
    if (val && val.trim() != "") {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.date.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    }
  }

  async getAllRdv() {
    const { value } = await Storage.get({ key: "userID" });
    this.service.getAllRdv(value).then((data) => {
      this.items = data;
      console.log("#####################" + JSON.stringify(data));
    });
  }
}
