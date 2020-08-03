import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navigate: { title: string; url: string; icon: string; }[];

  constructor(private elementRef: ElementRef) { }

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

sideMenu(){
  return this.navigate =
    [
      { title : "Home", url   : "/home", icon  : "home"},
      { title : "Chat", url   : "/chat", icon  : "chatboxes"},
      { title : "Contacts", url   : "/contacts", icon  : "contacts"},
    ]
  }

}
