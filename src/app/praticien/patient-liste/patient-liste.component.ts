import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/service/profile/profile.service';
import { SpinnerService } from 'src/app/service/spinner/spinner.service';

@Component({
  selector: 'app-patient-liste',
  templateUrl: './patient-liste.component.html',
  styleUrls: ['./patient-liste.component.scss'],
})
export class PatientListeComponent implements OnInit {
  items:any = [];
  isItemAvailable = false; 
  data: any = [];
  linkProfile: any;
  showSpinner: boolean;
  
  constructor(public router: Router, public profile: ProfileService,private spinnerService: SpinnerService) {
  
   if(this.items.length==0){
    this.initializaJSONData();
   }
  }
  
ngOnInit() {}

initializeItems(){}

jml(){
  return this.items.length;
}

ionViewWillEnter(){
  this.initializaJSONData();
}

initializaJSONData(){
  this.profile.getDatas().subscribe(
    data=>{ 
      this.items = data;
    },
    (err) => {
    console.log(err);
  });
}

async getItems(ev: any) {
  const val = ev.target.value;
    if (val && val.trim() != '') {
          this.items = this.items.filter((item) => {
            this.isItemAvailable = true;
        return (item.firstName.toLowerCase().indexOf(val.toLowerCase()) > -1 );
    
      })
    
  }else{
    this.initializaJSONData();
  }
}


profileDetails(){
  this.profile.getDatas().subscribe(
    data=>{ 
      this.data = data;
    },
    (err) => {
    console.log(err);
  });
}

toProfile(val){
  this.profile.getDatas().subscribe(
    data=>{ 
      this.data = data;
      for(let itt of this.data){
        if(itt.id == val){
         this.router.navigate(['/profile',itt.id]);          
        }
      }
    },
    (err) => {
    console.log(err);
  });
}


}
