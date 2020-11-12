import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { IUserPraticien } from 'src/app/Interfaces/praticien.interface';
import { PatientService } from 'src/app/services/patient.service';
import { PraticienService } from 'src/app/services/praticien.service';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss'],
})
export class InterventionComponent implements OnInit {
  @Input() carnet: any;
  public propositionForm: FormGroup;
  @Input() praticiens: IUserPraticien[];
  @Input() dateVaccin: any;
  constructor(private navParms: NavParams, private modalCtrl: ModalController, private patientSrvc: PatientService, private praticienSrv: PraticienService) { }

  ngOnInit() {
    // TODO: reserche bar
    this.navParms.get("praticiens") !== undefined ? this.praticiens = this.navParms.get("praticiens") : this.getAllPraticiens();
    console.log("LL: InterventionComponent -> ngOnInit -> this.navParms.get()", this.navParms.get("praticiens"))
    this.carnet = this.navParms.get("vaccin"); this.dateVaccin = this.navParms.get("dateVaccin");
    console.log("InterventionComponent -> ngOnInit -> this.praticiens", this.praticiens);
    this.propositionForm = new FormGroup({
      praticien: new FormControl("", [Validators.required]),
    });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  intervention(data) {
    const data_send = {
      date_prise: this.carnet.date_prise.date,
      praticien: data,
      vaccin: this.carnet.vaccin,
      id_carnet: this.carnet.id,
    }
    console.error("***************************LL: InterventionComponent -> ngOnInit -> vaccin", data_send);
    this.patientSrvc.interventionPraticien(data_send).subscribe(() => this.closeModal());


  }

  getAllPraticiens() {
    this.praticienSrv.getAllPraticien().subscribe(data => {
      this.praticiens = data;
    });
  }

}
