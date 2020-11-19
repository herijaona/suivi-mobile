import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { GlobalInteraction } from 'src/app/pages/global.interaction';
import { PraticienService } from 'src/app/services/praticien.service';

@Component({
  selector: 'app-realize',
  templateUrl: './realize.component.html',
  styleUrls: ['./realize.component.scss'],
})
export class RealizeComponent implements OnInit {

  @Input() data: { lot, carnet, id, };

  public realizeForm: FormGroup;
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
    // console.log("LL>>>: RealizeComponent -> ngOnInit -> data", this.data)
    this.realizeForm = new FormGroup({
      lot: new FormControl("", [Validators.required]),
    });
    // console.log(
    //   "NewRdvComponent -> patients -> test",
    //   this.navParms.get("patients")
    // );
  }

  realize() {
    this.globalItem.presentLoading();
    const dataToSend = {
      id: this.data.id,
      carnet: this.data.carnet,
      lot: this.realizeForm.value.lot,
    };
    // console.log("LL: RealizeComponent -> realize -> dataToSend", dataToSend)
    this.praticienSrvc.realizeVaccin(dataToSend).subscribe(() => {
      this.globalItem.dismissLoading();
      this.modalCtrl.dismiss();
    });
  }
}