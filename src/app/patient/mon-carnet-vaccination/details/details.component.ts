import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { UtilsService } from 'src/app/service/utils/utils.service';
import { AuthService } from 'src/app/service/auth.service';
import { SpinnerService } from 'src/app/service/spinner/spinner.service';
import { ActivatedRoute,Params,Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  intervention: any;
  id: string;
  interventionDate: any;
  @Input() somethingTestB;
  praticien: any = [];
  firstName: any;
  lastName: any;
  phoneProfessional: any;
  praticienExecutant: any;
  firstNamePrescripteur: any;
  listeVaccin_: any = [];
  vaccinName: any;
  constructor(private route: ActivatedRoute,public utilservice : UtilsService,public auth: AuthService,private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.IntervationtVaccinationId(this.id);
  }

  async IntervationtVaccinationId(id){
    this.praticien = await this.utilservice.getPraticiens();
    this.listeVaccin_ = await this.utilservice.getVaccin();
    if(id){
      this.intervention = await this.utilservice.getIntervationtVaccinationId(id);
      let k = this.intervention.praticienExecutant.split("/").slice(-1).pop();
      let k2 = this.intervention.praticienPrescripteur.split("/").slice(-1).pop();
      for(const prat of this.praticien){
        if(k == prat.id){
         this.firstName = prat.firstName;
         this.lastName = prat.lastName;
         this.phoneProfessional = prat.phoneProfessional;
        }
        if(k2 == prat.id){
          this.firstNamePrescripteur = prat.firstName;
        }
      }
      let k3 = this.intervention.vaccin.split("/").slice(-1).pop();
      for(const vac of this.listeVaccin_){
        if(vac.id == k3){
          this.vaccinName = vac.vaccinName;
        }
      }
      this.interventionDate = this.intervention.datePriseVaccin; 
    } 
  }


}
