import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { IPatient } from 'src/app/Interfaces/patient.interface';
import { IProposeRdv } from 'src/app/Interfaces/propose-rdv.interface';
import { PraticienService } from 'src/app/services/praticien.service';

@Component({
  selector: 'app-new-rendez-vous',
  templateUrl: './new-rendez-vous.component.html',
  styleUrls: ['./new-rendez-vous.component.scss'],
})
export class NewRendezVousComponent implements OnInit {

  @Input() test: String;
  @Input() patients: IPatient[];

  public propositionForm: FormGroup;
  selected: any;
  constructor(
    private praticienSrvc: PraticienService,
    private navCtrl: NavController,
    private navParms: NavParams,
    private modalCtrl: ModalController,
  ) { }

  async ngOnInit() {
    this.propositionForm = new FormGroup({
      patient: new FormControl("", [Validators.required]),
      dateRdv: new FormControl("", [Validators.required]),
      heureRdv: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
    });
    console.log(
      "NewRdvComponent -> patients -> test",
      this.navParms.get("patients")
    );
    this.patients = this.navParms.get("patients");
    this.patients.forEach((element) => {
      console.log("NewRdvComponent -> patients", element.firstName);
    });
  }

  isFieldInvalid(dataFormStep, field: string) {
    return (
      (!dataFormStep.get(field).valid && dataFormStep.get(field).touched) ||
      (dataFormStep.get(field).untouched && !dataFormStep.get(field).valid)
    );
  }

  async propose() {
    const prop: IProposeRdv = {
      description: this.propositionForm.value.description,
      patient: this.propositionForm.value.patient,
      dateRdv: this.propositionForm.value.dateRdv,
      heureRdv: this.propositionForm.value.heureRdv,
      // id: await this.praticienSrvc.getUserIDByStorage(),
      id: 0,
    };

    console.log(
      this.propositionForm.value.patient,
      this.propositionForm.value.dateRdv,
      this.propositionForm.value.description,
      this.propositionForm.value.heureRdv,
      prop.id
    );
    if (this.propositionForm.valid) {
      console.log(" proposition envoyé ");

      this.praticienSrvc.proposeRdv(prop);
      this.backToList();
    } else {
      console.log(" not valid ");
    }
  }

  backToList() {
    this.navCtrl.navigateRoot("/praticien/proposition-rdv");
    this.dismiss();
  }

  async cancel() {
    console.log(" cancel ");
    this.backToList();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
