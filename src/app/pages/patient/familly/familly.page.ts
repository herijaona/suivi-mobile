import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { IUserPraticien } from 'src/app/Interfaces/praticien.interface';
import { PatientService } from 'src/app/services/patient.service';
import { IPatientFamilyGroup, IPatientFamily } from 'src/app/Interfaces/patient.interface';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalInteraction } from '../../global.interaction';
import { FormGroup, Validators, FormControl } from '@angular/forms';

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
  familyGroupe: IPatientFamilyGroup;
  public HAVE_A_MEMBER: boolean = false;
  public ADD_GROUP: boolean = false;
  public ADD_MEMBER: boolean = false;
  addMemberFormGroup: FormGroup;
  addFamilyformGroup: FormGroup;

  constructor(public patientSrvc: PatientService, private authSrvc: AuthService, private globalItem: GlobalInteraction) { }

  showAddGroup() {
    this.ADD_GROUP = !this.ADD_GROUP;
  }
  showAddMember() {
    this.ADD_MEMBER = !this.ADD_MEMBER;
  }

  ngOnInit() {
    this.globalItem.presentLoading();
    this.getAllGroup();
    this.setupForm();
  }

  setupForm() {
    this.addMemberFormGroup = new FormGroup({
      username: new FormControl("", [Validators.required]),
    });

    this.addFamilyformGroup = new FormGroup({
      groupname: new FormControl("", [Validators.required]),
    });
  }
  updateRdvList() {
    if (this.List) {
      this.List.closeSlidingItems();
    }
  }

  getAllGroup() {
    this.patientSrvc.getFamily().subscribe(data => {
      // console.log("LL: FamillyPage -> getAllMyPraticians -> data", data[1])
      if (data[0][0] && data[0][0] != undefined && data[1] != []) {
        this.familyGroupe = {
          groupe_info: data[0],
          groupeMember: data[1]
        }
        this.HAVE_A_MEMBER = true;
      } else {
        this.HAVE_A_MEMBER = false;
      }
      this.globalItem.dismissLoading();
    })
  }

  createGroup() {
    // console.log("créer groupe !!! ");
  }

  deleteMember(member: IPatientFamily) {
    const { roles, username } = this.authSrvc.user;
    const _USERNAME = username;
    const CAN_I_DELETE = this.familyGroupe.groupeMember.find(({ username }) => username === _USERNAME)
    if (CAN_I_DELETE && CAN_I_DELETE.Referent == true) {
      // console.warn("attention you delete !!! ", CAN_I_DELETE.patient, "/", this.familyGroupe.groupe_info[0].ID);
      this.familyGroupe.groupeMember.find((data, index) => {
        if (data == CAN_I_DELETE) {
          if (CAN_I_DELETE == member) {
            // this.globalItem.presentToast("Tu ne peux pas te supprimé, tu es celui qui a créer ce groupe");
            const MSG = `Tu veux vraiment te supprimé ?`
            this.globalItem.alertDelete(member.id, this, MSG, this.deleteIt);
            return;
          }
          // console.log("LL: FamillyPage -> deleteMember -> CAN_I_DELETE", member);
          // console.log("LL: FamillyPage -> deleteMember -> member", member.id);
          const MSG = `Tu veux vraiment supprimé ${member.firstName} ?`
          this.globalItem.alertDelete(member.id, this, MSG, this.deleteIt);
          return;
        }
      })
    }
  }

  private deleteIt(_id, parent) {
    // console.log("LL: FamillyPage -> deleteIt -> _id", _id)
    parent.globalItem.presentLoading();
    // parent.familyGroupe.groupeMember = parent.familyGroupe.groupeMember.slice(index)
    parent.patientSrvc.deleteFamilyMember(_id).subscribe(() => {
      parent.getAllGroup();
      // this.globalItem.dismissLoading();
    });
  }

  addNewFamilyMember(data) {
    const data_to_send = {
      username: data,
      id_group: this.familyGroupe.groupe_info[0].ID
    }
    const SUCCESS = "Success";
    // console.log("LL: FamillyPage -> addNewFamilyMember -> data_to_send", data_to_send);
    this.patientSrvc.addGroupFamilyMember(data_to_send).subscribe(response => {
      // console.log("LL: FamillyPage -> addNewFamilyMember -> response", response)
      if (response == SUCCESS) {
        this.globalItem.presentLoading();
        this.getAllGroup();
      }
      this.globalItem.presentToast(response);
    });
  }

  addNewFamilyGroup(data) {
    // console.log("LL: FamillyPage -> addNewFamilyGroup -> data", data);
    this.patientSrvc.addGroupFamily(data).subscribe((response) => {
      // console.log("LL: FamillyPage -> addNewFamilyGroup -> response", response)
      this.globalItem.presentLoading();
      this.getAllGroup();
    })
  }
}


