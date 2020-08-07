import { Component, OnInit, ElementRef } from '@angular/core';
import { UtilsService } from '../../service/utils/utils.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  navigate: { title: string; url: string; icon: string; }[];
  ROLE_PRATICIEN: any = "ROLE_PRATICIEN";
  ROLE_PATIENT: any = "ROLE_PATIENT";

  constructor(private elementRef: ElementRef, private utils: UtilsService) { }

  ngOnInit() {
    this.sideMenu();
  }

  openCustom(i) {
    if(i == 1){
      this.elementRef.nativeElement
      .querySelector('.ion-content-menu')
      .classList.add('display-block');
    }else{
      this.elementRef.nativeElement
      .querySelector('.ion-content-menu')
      .classList.remove('display-block');
    }
}

async sideMenu(){
  let user = await this.utils.getUserDetails();
  if(user.roles[0] == this.ROLE_PRATICIEN){
    return this.navigate =
      [
        { title : "Dashboard", url   : "/praticien/praticien-dashboard", icon  : "home"},
        { title : "Chat", url   : "/praticien/praticien-dashboard", icon  : "chatboxes"},
        { title : "Contacts", url   : "/praticien/praticien-dashboard", icon  : "contacts"},
      ]
  }else if(user.roles[0] == this.ROLE_PATIENT){
    return this.navigate =
      [
        { title : "Dash", url   : "/patient/patient-dashboard", icon  : "home"},
        { title : "Chat", url   : "/chat", icon  : "chatboxes"},
        { title : "Contacts", url   : "/contacts", icon  : "contacts"},
      ]
  }
  
  }

}
