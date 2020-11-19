import { Component, OnInit, Input } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { IVaccination } from "src/app/Interfaces/praticien.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  @Input() vaccinations: { date_prise: { date }, firstName, lastName, vaccinName, id, identifiant_vaccin, identification, datePriseVaccin: { date } }[];
  @Input() isWithNoteBook;
  constructor(private modalCtrl: ModalController, private navParms: NavParams) {
    this.vaccinations = this.navParms.get("data");
    this.isWithNoteBook = this.navParms.get("isWithNoteBook");
    // console.log(this.vaccinations);
  }

  ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
