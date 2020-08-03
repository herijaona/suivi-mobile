import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils/utils.service';
import { AuthService } from 'src/app/service/auth.service';
import { SpinnerService } from 'src/app/service/spinner/spinner.service';
import { ActivatedRoute,Params,Router } from '@angular/router';

@Component({
  selector: 'app-detail-group-famille',
  templateUrl: './detail-group-famille.component.html',
  styleUrls: ['./detail-group-famille.component.scss'],
})
export class DetailGroupFamilleComponent implements OnInit {
  MembreGroupFamille: any;
  patient_: any;
  GroupFamille: any;
  members: any = [];
  id: any;
  firstName: any;
  lastName: any;

  constructor(private route: ActivatedRoute,public utilservice : UtilsService,public auth: AuthService,private spinnerService: SpinnerService) { }

  async ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.patient_ =  await this.utilservice.getPatients();
    this.getGroupFamilles();
    this.getFamilles(this.id); 
  }

  async getFamilles(param){
    this.MembreGroupFamille = await this.utilservice.getFamille();
    for(const membre of this.MembreGroupFamille){
      let k = membre.groupFamily.split("/").slice(-1).pop();
      if(param == k){
        const fam = {
          g: membre.groupFamily,
          p: membre.patientChild,
        }
        this.members.push(fam);
      }
    }
  }

  groupFirstName(params){
    let k = params.split("/").slice(-1).pop();
    for(const patient of this.patient_){
      if(k == patient.id){
        this.firstName = patient.firstName;
        this.lastName = patient.lastName;
      }
    }
  }

  async getGroupFamilles(){
    this.GroupFamille = await this.utilservice.getFamille();
    console.log(this.GroupFamille);
  }

}
