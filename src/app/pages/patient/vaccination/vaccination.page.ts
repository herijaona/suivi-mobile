import { PatientService } from "src/app/services/patient.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vaccination",
  templateUrl: "./vaccination.page.html",
  styleUrls: ["./vaccination.page.scss"],
})
export class VaccinationPage implements OnInit {
  constructor(private patientSrv: PatientService) {}

  ngOnInit() {
    console.log("VaccinationPage -> ngOnInit -> ngOnInit");
    this.initializeItems();
  }

  initializeItems() {
    // this.patientSrv.getCarnetVaccinationId(3);
  }
}
