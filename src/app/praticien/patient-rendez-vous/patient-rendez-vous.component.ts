import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-rendez-vous',
  templateUrl: './patient-rendez-vous.component.html',
  styleUrls: ['./patient-rendez-vous.component.scss'],
})
export class PatientRendezVousComponent implements OnInit {
  items:any = [];
  isItemAvailable = true; 
  constructor() {}
  
ngOnInit() {
  this.items = [
    {
      name:'Caroline Loa', date:'05/04/2020', content:'Lorem ipsum dolor'
    },
    {
      name:'Lindsa pay', date:'07/04/2020', content:'Lorem ipsum dolor'
    },
    {
      name:'Lindsa pay', date:'05/04/2020', content:'Lorem ipsum dolor'
    }
];
}

initializeItems(){
  this.items = [
    {
      name:'Caroline Loa', date:'05/04/2020', content:'Lorem ipsum dolor'
    },
    {
      name:'Lindsa pay', date:'07/04/2020', content:'Lorem ipsum dolor'
    },
    {
      name:'Lindsa pay', date:'05/04/2020', content:'Lorem ipsum dolor'
    }
];
}

getItems(ev: any) {
  this.initializeItems();
  const val = ev.target.value;
    if (val && val.trim() != '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
      return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || 
              item.date.toLowerCase().indexOf(val.toLowerCase()) > -1
      );
    })
  }
}


}
