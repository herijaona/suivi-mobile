import { Component, OnInit } from "@angular/core";
import { UtilsService } from "src/app/service/utils/utils.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Plugins } from "@capacitor/core";
import { NavController } from "@ionic/angular";
const { Storage } = Plugins;
export interface IProposeRdv {
  description: String;
  patient: Number;
  dateRdv: Date;
  heureRdv: Date;
  id: String;
}

@Component({
  selector: "app-patient-proposition-rendez-vous",
  templateUrl: "./patient-proposition-rendez-vous.component.html",
  styleUrls: ["./patient-proposition-rendez-vous.component.scss"],
})
export class PatientPropositionRendezVousComponent implements OnInit {
  public patients;
  public propositionForm: FormGroup;

  selected: any;
  constructor(private service: UtilsService, private navCtrl: NavController) {
    this.getPatients();
  }

  async ngOnInit() {
    this.propositionForm = new FormGroup({
      patient: new FormControl("", [Validators.required]),
      dateRdv: new FormControl("", [Validators.required]),
      heureRdv: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
    });
  }

  async getPatients() {
    (await this.service.getPatients()).subscribe((data) => {
      this.patients = data;
    });
  }

  isFieldInvalid(dataFormStep, field: string) {
    return (
      (!dataFormStep.get(field).valid && dataFormStep.get(field).touched) ||
      (dataFormStep.get(field).untouched && !dataFormStep.get(field).valid)
    );
  }

  async propose() {
    console.log(
      this.propositionForm.value.patient,
      this.propositionForm.value.dateRdv,
      this.propositionForm.value.description,
      this.propositionForm.value.heureRdv
    );
    const { value } = await Storage.get({ key: "userID" });
    const prop: IProposeRdv = {
      description: this.propositionForm.value.description,
      patient: this.propositionForm.value.patient,
      dateRdv: this.propositionForm.value.dateRdv,
      heureRdv: this.propositionForm.value.heureRdv,
      id: value,
    };
    if (this.propositionForm.valid) {
      this.service.proposeRdv(prop);
      this.backToList();
    } else {
      console.log(" not valid ");
    }
  }

  backToList() {
    this.navCtrl.navigateRoot("/praticien/patient-rendez-vous");
  }

  async cancel() {
    console.log(" cancel ");
    this.backToList();
  }
}
