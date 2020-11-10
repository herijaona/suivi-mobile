import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { IUserPraticien } from 'src/app/Interfaces/praticien.interface';
import { PatientService } from 'src/app/services/patient.service';

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
  constructor(public patientSrvc: PatientService) { }

  ngOnInit() {
    this.getAllMyPraticians();
  }
  updateRdvList() {
    if (this.List) {
      this.List.closeSlidingItems();
    }
  }

  getAllMyPraticians() {
    this.patientSrvc.getAssociatedPraticians().subscribe(data => {
      for (let i = 0; i < 4; i++) {
        this.assoc_praticiens.push(data[0]);
      };
    })
  }
}
