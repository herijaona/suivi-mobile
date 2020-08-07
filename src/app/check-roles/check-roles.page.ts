import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../service/utils/utils.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-check-roles',
  //templateUrl: './check-roles.page.html',
  //styleUrls: ['./check-roles.page.scss'],
})
export class CheckRolesPage implements OnInit {

  ROLE_PRATICIEN: any = "ROLE_PRATICIEN";
  ROLE_PATIENT: any = "ROLE_PATIENT";

  constructor(private utils: UtilsService, private navCtrl: NavController) { }

  async ngOnInit() {
    let user = await this.utils.getUserDetails();
    if(user.roles[0] == this.ROLE_PRATICIEN){
      this.navCtrl.navigateRoot('praticien/praticien-dashboard');
    }else if(user.roles[0] == this.ROLE_PATIENT){
      this.navCtrl.navigateRoot('patient/patient-dashboard');
    }
  }

}
