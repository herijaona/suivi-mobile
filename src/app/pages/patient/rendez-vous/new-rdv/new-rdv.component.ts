import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModalController, NavController, NavParams } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { IPatient, IRdvPatient } from "src/app/Interfaces/patient.interface";
import { IUserPraticien } from "src/app/Interfaces/praticien.interface";
import { PraticienService } from "src/app/services/praticien.service";

@Component({
  selector: "app-new-rdv",
  templateUrl: "./new-rdv.component.html",
  styleUrls: ["./new-rdv.component.scss"],
})
export class NewRdvComponent implements OnInit {
  @Input() test: String;
  @Input() praticiens: IUserPraticien[];

  public propositionForm: FormGroup;
  selected: any;
  constructor(
    private praticienSrvc: PraticienService,
    private navCtrl: NavController,
    private navParms: NavParams,
    private modalCtrl: ModalController,
    private storage: Storage
  ) { }

  async ngOnInit() {
    this.propositionForm = new FormGroup({
      praticien: new FormControl("", [Validators.required]),
      typeRdv: new FormControl("", [Validators.required]),
      dateRdv: new FormControl("", [Validators.required]),
      heureRdv: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
    });

    this.praticiens = this.navParms.get("praticiens");
    this.praticiens.forEach((element) => {
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
    // const prop: IRdvPatient = {
    //   description: this.propositionForm.value.description,
    //   praticien: this.propositionForm.value.praticien,
    //   // typeRdv: this.propositionForm.value.typeRdv,
    //   // dateRdv: this.propositionForm.value.dateRdv,
    //   // heureRdv: this.propositionForm.value.heureRdv,
    //   // id: await this.praticienSrvc.getUserIDByStorage(),
    //   id: 0,
    // };

    console.log(
      this.propositionForm.value.patient,
      this.propositionForm.value.dateRdv,
      this.propositionForm.value.description,
      this.propositionForm.value.heureRdv,
      // prop.id
    );
    if (this.propositionForm.valid) {
      console.log(" proposition envoyé ");

      // this.praticienSrvc.proposeRdv(prop); //TODO: post proposition
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
