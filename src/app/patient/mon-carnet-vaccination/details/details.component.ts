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
  etat: any;
  lastName: any;
  phoneProfessional: any;
  praticienExecutant: any;
  firstNamePrescripteur: any;
  listeVaccin_: any = [];
  vaccinName: any;
  carnetVaccin: any;

  constructor(private route: ActivatedRoute,private router: Router,  public utilservice : UtilsService,public auth: AuthService,private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.firstNamePrescripteur = params['prescripteur'];
      this.lastName = params['executant'];
      this.interventionDate = params['date'];
      this.etat = params['etat'];
      this.vaccinName = params['vaccin'];
      this.phoneProfessional = params['phone'];
    });
  
    //this.IntervationtVaccinationId(this.id);
  }
}
