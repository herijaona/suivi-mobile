import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilsService } from 'src/app/service/utils/utils.service';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss'],
})
export class PatientDashboardComponent implements OnInit {

  constructor(public navCtrl: NavController, public util: UtilsService) { }

  async ngOnInit() {
    let userInfo = await this.util.getInfoCurrentUser();
    if(userInfo && userInfo.status == "OK"){
      const userID = JSON.stringify(userInfo.data);
        Storage.set({
          key: 'userID',
          value: userID
        });
    }
  }

  goToCarnetVaccin() {
    this.navCtrl.navigateForward('patient/carnet-vaccination');
  }

  goToRdv() {
    this.navCtrl.navigateForward('patient/patient-rendez-vous');
  }
  
  goToGroupFamille() {
    this.navCtrl.navigateForward('patient/groupe-famille');
  }
  goToConsultation() {
    this.navCtrl.navigateForward('patient/consultation');
  }
}
