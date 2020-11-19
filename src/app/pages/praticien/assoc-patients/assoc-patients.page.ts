import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { IProfilePatient } from 'src/app/Interfaces/patient.interface';
import { IUserPatient, IUserPraticien } from 'src/app/Interfaces/praticien.interface';
import { PatientService } from 'src/app/services/patient.service';
import { PraticienService } from 'src/app/services/praticien.service';
import { GlobalInteraction } from '../../global.interaction';

@Component({
  selector: 'app-assoc-patients',
  templateUrl: './assoc-patients.page.html',
  styleUrls: ['./assoc-patients.page.scss'],
})
export class AssocPatientsPage implements OnInit {

  @ViewChild("List", { static: true }) List: IonList; // TODO : get all consultation list
  queryText = "";
  ios: boolean;
  showSearchbar: boolean;
  assoc_patients: IUserPatient[] = [];
  constructor(public patientSrvc: PatientService, private globalItem: GlobalInteraction, private praticientSrvc: PraticienService) { }

  ngOnInit() {
    this.globalItem.presentLoading();
    this.getAllMyPatients();
  }
  updateRdvList() {
    if (this.List) {
      this.List.closeSlidingItems();
    }
  }

  getAllMyPatients() {
    this.praticientSrvc.getAssociatedPatient().subscribe((data: IUserPatient[]) => {
      // console.log("LL: AssocPatientsPage -> getAllMyPatients -> data", data)
      this.assoc_patients = data;
      this.globalItem.dismissLoading();
    })
  }

}
