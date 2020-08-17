import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/service/utils/utils.service';
import { AuthService } from 'src/app/service/auth.service';
import { SpinnerService } from 'src/app/service/spinner/spinner.service';
import { NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-mon-consultation',
  templateUrl: './mon-consultation.component.html',
  styleUrls: ['./mon-consultation.component.scss'],
})
export class MonConsultationComponent implements OnInit {

  initialCount: number = 10;
  show: boolean = true;
  id: any;
  listeConsultation: [];

  constructor(private route: ActivatedRoute,
    public router: Router,
    public utilservice : UtilsService,
    public auth: AuthService,
    private spinnerService: SpinnerService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      
      if((this.id == undefined) || (this.id == '')){
        this.show = true;
      }else{
        this.show = false;
      }
      this.ListeConsultation();
    })
  }

  async ListeConsultation(){
    try{
      const { value }  = await Storage.get({ key: 'userID'});
      this.listeConsultation = await this.utilservice.getConsultationById(value);
    }catch(error){
      console.log(error); 
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

  details(item){
    
  }

}
