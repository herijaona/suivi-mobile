import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { GlobalInteraction } from 'src/app/pages/global.interaction';
import { PraticienService } from 'src/app/services/praticien.service';

@Component({
  selector: 'app-organize',
  templateUrl: './organize.component.html',
  styleUrls: ['./organize.component.scss'],
})
export class OrganizeComponent implements OnInit {
  @Input() data: { id, patient, objetConsultation, type, date, heure };
  dateT;
  hoursT;

  public organizeForm: FormGroup;
  selected: any;
  constructor(
    private navParms: NavParams,
    private modalCtrl: ModalController,
    private praticienSrvc: PraticienService,
    private globalItem: GlobalInteraction
  ) {

  }

  async ngOnInit() {
    this.data = this.navParms.get("data");
    // console.log("LL: OrganizeComponent -> ngOnInit -> data", this.data)
    const transform_date = new Date(this.data.date);
    this.dateT = (transform_date.getFullYear() + "-" + transform_date.getMonth() + "-" + transform_date.getDate()).toString();
    this.hoursT = (new Date(this.dateT).getHours() + ":" + new Date(this.dateT).getMinutes()).toString();
    // console.log("LL: OrganizeComponent -> ngOnInit -> hoursT", this.hoursT)
    this.organizeForm = new FormGroup({
      dateRdv: new FormControl("", [Validators.required]),
      heureRdv: new FormControl("", [Validators.required]),
    });
    // console.log(
    //   "NewRdvComponent -> patients -> test",
    //   this.navParms.get("patients")
    // );
  }

  organise() {
    this.globalItem.presentLoading();
    const dataToSend = {
      id: this.data.id,
      date: (new Date(this.dateT).getFullYear() + "-" + (new Date(this.dateT).getMonth() + 1 )+ "-" + new Date(this.dateT).getDate()).toString(),
      heure: (new Date(this.hoursT).getHours() + ":" + new Date(this.hoursT).getMinutes()).toString(),
      objet: this.data.objetConsultation,
      typeRdv: this.data.type
    };
    // console.log("LL: OrganizeComponent -> organise -> dataToSend", dataToSend)
    // console.log(dataToSend, this.organizeForm.value.dateRdv, this.organizeForm.value.heureRdv);
    this.praticienSrvc.organizeRdv(dataToSend).subscribe((data) => {
      // console.log("LL: OrganizeComponent -> organise -> data", data)
      this.globalItem.dismissLoading();
      this.modalCtrl.dismiss();
    });
  }

}
