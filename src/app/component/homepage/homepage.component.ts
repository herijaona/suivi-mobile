import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProfileService } from 'src/app/service/profile/profile.service';
import { AuthService } from '../../service/auth.service';

import { ConstantService } from 'src/app/helper/constant/constant.service';
import { UtilsService } from 'src/app/service/utils/utils.service';
import { MonCalendrierVaccinationComponent } from 'src/app/patient/mon-calendrier-vaccination/mon-calendrier-vaccination.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  data: any;
  teu: Promise<void>;
  cao:any;
  myname: any = [];
  user: any;
  idd: any;
  istoken: any;
  toke: any;
  tak: any;

  constructor(
    private menu: MenuController,
    public profile: ProfileService,
    public auth: AuthService,
    public constant: ConstantService,
    public utilservice : UtilsService
    ) {
      
  

     }

  async ngOnInit() {

   // this.istoken = await this.auth.user();
    
    // await this.getCentreHealths();
    // await this.getCentreHealthsId();
    // await this.vac();
    
  //   const isManager = await this.auth.getUserDetails();
  //   this.auth.user().subscribe(
  //     data=>{ 
  //       this.data = data;
  //       for(let u of this.data){
  //         if(isManager.username == u.username){
  //           this.myname.push(u.username)
  //         }
  //       }
  //     },
  //     (err) => {
  //     console.log(err);
  //   });
  // console.log( this.myname );
  

  // this.auth.user().subscribe(
  //   data=>{ 
  //     this.data = data;
  
  //   },
  //   (err) => {
  //   console.log(err);
  // });
  
  this.getGroupFamilles();

  }


  async vac(){
    this.tak = await this.utilservice.getCarnetVaccination();
    console.log(this.tak);
    
    return this.tak;
  }
  async getCentreHealths(){
    this.toke = await this.utilservice.getCentreHealh();
    return this.toke; 
  }
  async getCentreHealthsId(){
    let healTHiD = await this.utilservice.getCentreHealhId(3);
    return healTHiD; 
  }

  async getGroupFamilles(){
    let healTHiD = await this.utilservice.getGroupFamille();
    return healTHiD; 
  }

  

  
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
