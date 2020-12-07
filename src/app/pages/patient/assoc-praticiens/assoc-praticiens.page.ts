import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { EmptyPageComponent } from 'src/app/components/empty-page/empty-page.component';
import { IUserPraticien } from 'src/app/Interfaces/praticien.interface';
import { PatientService } from 'src/app/services/patient.service';
import { GlobalInteraction } from '../../global.interaction';

@Component({
  selector: 'app-assoc-praticiens',
  templateUrl: './assoc-praticiens.page.html',
  styleUrls: ['./assoc-praticiens.page.scss'],
})
export class AssocPraticiensPage implements OnInit {
  @ViewChild("List", { static: true }) List: IonList; // TODO : get all consultation list
  queryText = "";
  ios: boolean;
  showSearchbar: boolean;
  assoc_praticiens: IUserPraticien[] = [];
  constructor(public patientSrvc: PatientService, private globalItem: GlobalInteraction, private appEmpty: EmptyPageComponent) { }

  ngOnInit() {
    this.globalItem.presentLoading();
    this.getAllMyPraticians();
    this.appEmpty.page = " des praticiens associé ";
  }
  updateRdvList() {
    if (this.List) {
      this.List.closeSlidingItems();
    }
  }

  getAllMyPraticians() {
    this.patientSrvc.getAssociatedPraticians().subscribe(data => {
      this.assoc_praticiens = data;
      this.globalItem.dismissLoading();
    })
  }
}
