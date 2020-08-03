import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils/utils.service';
import { AuthService } from 'src/app/service/auth.service';
import { SpinnerService } from 'src/app/service/spinner/spinner.service';

@Component({
  selector: 'app-rdv-validation',
  templateUrl: './rdv-validation.component.html',
  styleUrls: ['./rdv-validation.component.scss'],
})
export class RdvValidationComponent implements OnInit {
  data: any = [];
  dataFilter: any = [];
  user: any;
  users: any;
  patient_: any;
  dato:any = [];
  userso: any;
  usernam_: any;
  getPers: any;
  id_patient: any;
  ordo1: any;
  allOrdoVaccin: boolean = true;
  allOrdoVaccinId: boolean = false;
  ordo: any;

  constructor(public utilservice : UtilsService,public auth: AuthService,private spinnerService: SpinnerService) {
   }

  async ngOnInit() {
    this.user = await this.auth.userOne();
    this.usernam_ = this.user.username;
    this.patient_ =  await this.utilservice.getPatients();

    this.getAlUsers();
    this.getPersm();
  }

  /** Test user to getUsers and patients  **/
  async getPersm (value?){
    for(let patient of this.patient_){
      let k = patient.user.split("/").slice(-1).pop();
      this.ordoVaccination(this.id_patient);
      if(k == value){
        this.id_patient = patient.id;  
      }
    }
    return this.id_patient;
  }

  /** Test user Token and all users  **/
  async getAlUsers() { 
    this.auth.user().subscribe(
      data=>{ 
        this.userso = data;
        let usnm = this.user.username;
         this.dataFilter= this.userso.filter(function(hero) {
          return hero.username == usnm;
        });
        for(let f of this.dataFilter){
          this.getPers = f.id;
          this.getPersm(this.getPers);
        }
      },
      (err) => {
      console.log(err);
    });
  }

  /** Get an ordonnance **/
  async ordoVaccination(value2?){
    try{
    this.dato =  await this.utilservice.ordoVaccinations();
    console.log(this.dato);
    
    this.data = this.dato.filter(function(hero) {
      return hero.patient == '/apip/patients/' + value2 + '';
    });
    }catch(error){
      console.log(error);
    }
  }

  /** Get status **/
  getStatus(val, value:any){
    if(val == 0){ value = 'En cours de validation'; 
      return value;
    }else if(val = 1){ value = 'Valide';
      return value;
    }
  }

  /** Get status color **/
  getStatusColor(val){
    if(val == 0){  
      return  { color: '#f5035c' } ;
    }else if(val = 1){ 
      return  { color: '#028e55' } ;
    }
  }

  /** Get an ordonnance **/
  async findOneOrdonnance(id?){
    this.allOrdoVaccinId = !this.allOrdoVaccinId;
    this.allOrdoVaccin = !this.allOrdoVaccin;
    try {
      this.ordo1 =  await this.utilservice.ordoVaccinationId(id);
    }catch(error){
      console.error(error);
    }
  }

}


