import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { IUserPraticien } from 'src/app/Interfaces/praticien.interface';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss'],
})
export class InterventionComponent implements OnInit {
  @Input() nomVaccin: String;
  public propositionForm: FormGroup;
  @Input() praticiens: IUserPraticien[];
  constructor(private navParms: NavParams, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.praticiens = this.navParms.get("praticiens");
    this.nomVaccin = this.navParms.get("nomVaccin");
    console.log("InterventionComponent -> ngOnInit -> this.nomVaccin", this.nomVaccin);
    console.log("InterventionComponent -> ngOnInit -> this.praticiens", this.praticiens);
    this.propositionForm = new FormGroup({
      patient: new FormControl("", [Validators.required]),
      dateRdv: new FormControl("", [Validators.required]),
      heureRdv: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
    });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
