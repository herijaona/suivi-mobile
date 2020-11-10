import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { IUserPraticien } from 'src/app/Interfaces/praticien.interface';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-familly',
  templateUrl: './familly.page.html',
  styleUrls: ['./familly.page.scss'],
})
export class FamillyPage implements OnInit {

  @ViewChild("List", { static: true }) List: IonList; // TODO : get all consultation list
  queryText = "";
  ios: boolean;
  showSearchbar: boolean;
  assoc_praticiens: IUserPraticien[] = [];
  public HAVE_A_MEMBER: boolean = false;
  public ADD_GROUP: boolean = false;
  constructor(public patientSrvc: PatientService) { }

  showAddGroup() {
    this.ADD_GROUP = !this.ADD_GROUP;
  }

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

  createGroup() {
    console.log("créer groupe !!! ");
  }
}
