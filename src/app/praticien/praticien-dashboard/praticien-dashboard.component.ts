import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { UtilsService } from 'src/app/service/utils/utils.service';
const { Storage } = Plugins;

@Component({
  selector: 'app-praticien-dashboard',
  templateUrl: './praticien-dashboard.component.html',
  styleUrls: ['./praticien-dashboard.component.scss'],
})
export class PraticienDashboardComponent implements OnInit {

  constructor(public util: UtilsService) { }

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

}
