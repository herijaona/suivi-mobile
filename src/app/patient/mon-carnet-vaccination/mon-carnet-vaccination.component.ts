import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from 'src/app/service/utils/utils.service';
import { AuthService } from 'src/app/service/auth.service';
import { SpinnerService } from 'src/app/service/spinner/spinner.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { NavController } from '@ionic/angular';
const { Storage } = Plugins;

@Component({
  selector: 'app-mon-carnet-vaccination',
  templateUrl: './mon-carnet-vaccination.component.html',
  styleUrls: ['./mon-carnet-vaccination.component.scss'],
})
export class MonCarnetVaccinationComponent implements OnInit {
  listeVaccination: any;
  listeVaccin_: any;
  test: string ;
  listVac: any;
  col: any;
  fortu: any;
  value1: any;
  intervention: any = [];
  inter: any = [];
  praticien: any = [];
  @Input() tuto: any = 'test';
  initialCount: number = 10;
  show: boolean = true;
  id: any;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public utilservice : UtilsService,
    public auth: AuthService,
    private spinnerService: SpinnerService,
    private navCtrl: NavController
    ) {
  
   }

   async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      
      if((this.id == undefined) || (this.id == '')){
        this.show = true;
      }else{
        this.show = false;
      }
    });
      //this.listVac = await this.ListeVaccin();
      this.ListeCarnetVaccination();
      //this.ListeVaccin();
      //this.InterventionVaccination();
      //this.PraticienList();
  }

  async ListeVaccin(){
    this.listeVaccin_ = await this.utilservice.getVaccin();
    return this.listeVaccin_;
  }

  async ListeCarnetVaccination(){
    try{
      const { value }  = await Storage.get({ key: 'userID'});
      this.listeVaccination = await this.utilservice.getCarnetVaccinationId(value);
      console.log("MonCarnetVaccinationComponent -> ListeCarnetVaccination -> listeVaccination", this.listeVaccination);
     
    }catch(error){
      console.log(error); 
    }
  }

  async InterventionVaccination(){
    this.intervention = await this.utilservice.getIntervationtVaccination();
  }

  async PraticienList(){
    this.praticien = await this.utilservice.getPraticiens();
  }

  getItemPraticien(value){
    let k = value.split("/").slice(-1).pop();
    for(const min of this.intervention){
      if(min.id == k){
        for(const prat of this.praticien){
          if(min.id){
            let c = min.praticienPrescripteur.split("/").slice(-1).pop();
            if(c == prat.id){
              return prat.firstName;
            }
          }
        }
      }
    }
  }

  getItemVaccin(value1){
      let k = value1.split("/").slice(-1).pop();
      for(const listVac of this.listVac){
        if(listVac.id == k){
          return listVac.vaccinName;   
        }
    }
  }

  getItemEtat(value1){
    if(value1 == true){
      return 'Activé';
    }else{
      return 'Non activé';
    }
  }

  getStatusColor(val){
    if(val == 0 || val == null){  
      return  { color: '#f5035c' } ;
    }else if(val = 1){ 
      return  { color: '#028e55' } ;
    }
  }

  linkId(val){
    this.router.navigate(["/patient/carnet-vaccination/detail/",val]);  
  }

  patientId(item){
    this.show = !this.show;
    let navigationExtras: NavigationExtras = {
      state: item
    };
    //routerLink="/patient/carnet-vaccination/detail?id={{item.id}}" routerDirection="forward"
    this.navCtrl.navigateForward('patient/carnet-vaccination/detail?id='+item.id, navigationExtras);
  }

  async ionViewWillEnter(){}

}
