import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mon-rendez-vous',
  templateUrl: './mon-rendez-vous.component.html',
  styleUrls: ['./mon-rendez-vous.component.scss'],
})
export class MonRendezVousComponent implements OnInit {
  show: boolean = true;
  line: any = [];
  showParent: boolean = true;
  constructor(public router: Router,private route: ActivatedRoute) { }

  data: any;
  ngOnInit() {
    let parentUrlExist = this.route.snapshot['_routerState'].url;
    if(parentUrlExist == '/patient/patient-rendez-vous'){
      this.showParent = !this.showParent;
    }
  }

  link(l){
      this.showParent = !this.showParent;
      if("proposition" == l){
        this.router.navigate(['/proposition']);          
      }else if("valide" == l){
        this.router.navigate(['/patient/patient-rendez-vous/validation']);  
      } else if("annule" == l){
        this.router.navigate(['/annule']);  
      }      
  }
  

}
