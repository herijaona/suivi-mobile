import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { IPatient } from 'src/app/Interfaces/patient.interface';
import { IProposeRdv } from 'src/app/Interfaces/propose-rdv.interface';
import { GlobalInteraction } from 'src/app/pages/global.interaction';
import { PraticienService } from 'src/app/services/praticien.service';

@Component({
  selector: 'app-new-rendez-vous',
  templateUrl: './new-rendez-vous.component.html',
  styleUrls: ['./new-rendez-vous.component.scss'],
})
export class NewRendezVousComponent implements OnInit {

  @Input() test: String;
  @Input() patients: IPatient[] = [];

  public propositionForm: FormGroup;
  selected: any;
  constructor(
    private praticienSrvc: PraticienService,
    private navCtrl: NavController,
    private navParms: NavParams,
    private modalCtrl: ModalController,
    private globalItem: GlobalInteraction
  ) { }

  async ngOnInit() {
    this.propositionForm = new FormGroup({
      patient: new FormControl("", [Validators.required]),
      dateRdv: new FormControl("", [Validators.required]),
      heureRdv: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      typeRdv: new FormControl("", [Validators.required]),
    });

    // this.navParms.get("patients") != undefined ? this.patients = this.navParms.get("patients") : this.getPatientAssoc();
    this.getPatientAssoc();
    this.patients.forEach((element) => {
      // console.log("NewRdvComponent -> patients", element.firstName);
    });
  }

  getPatientAssoc() {
    this.praticienSrvc.getAssocPatient().subscribe((data: any) => {
      this.patients = data;
    })
  }

  isFieldInvalid(dataFormStep, field: string) {
    return (
      (!dataFormStep.get(field).valid && dataFormStep.get(field).touched) ||
      (dataFormStep.get(field).untouched && !dataFormStep.get(field).valid)
    );
  }

  async createRdv() {
    this.globalItem.presentLoading();
    const date_to_transform = (new Date(this.propositionForm.value.dateRdv).getFullYear() + "-" + new Date(this.propositionForm.value.dateRdv).getMonth() + "-" + new Date(this.propositionForm.value.dateRdv).getDate()).toString()
    const hour_to_transform = (new Date(this.propositionForm.value.heureRdv).getHours() + ":" + new Date(this.propositionForm.value.heureRdv).getMinutes()).toString();
    const dataToSend = {
      objet: this.propositionForm.value.description,
      patient: this.propositionForm.value.patient,
      date: date_to_transform,
      heure: hour_to_transform,
      typeRdv: this.propositionForm.value.typeRdv
    };
    // console.log("LL: NewRendezVousComponent -> createRdv -> dataToSend", dataToSend)


    if (this.propositionForm.valid) {
      // console.log(" proposition envoyé ");

      this.praticienSrvc.createRdv(dataToSend).subscribe((data) => {
        // console.log("LL: NewRendezVousComponent -> createRdv -> data", data)
        this.globalItem.dismissLoading();

        this.backToList();
      });
    } else {
      this.globalItem.presentToast("Veuillez remplir tous les champs");
      this.globalItem.dismissLoading();

    }
  }

  backToList() {
    // this.navCtrl.navigateRoot("/praticien/proposition-rdv");
    this.dismiss();
  }

  async cancel() {
    // console.log(" cancel ");
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
