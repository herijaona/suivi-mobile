import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils/utils.service';
import { SpinnerService } from 'src/app/service/spinner/spinner.service';

@Component({
  selector: 'app-rdv-annulation',
  templateUrl: './rdv-annulation.component.html',
  styleUrls: ['./rdv-annulation.component.scss'],
})
export class RdvAnnulationComponent implements OnInit {
  consultationRejected: any = [];
  constructor(public utilservice : UtilsService, private spinnerService: SpinnerService) { }

  async ngOnInit() {
    console.log('RdvAnnulationComponent started')
    this.consultationRejected = await this.utilservice.getConsultationRejectByID();
    console.log("RdvAnnulationComponent -> ngOnInit -> consRejected", this.consultationRejected)
  }

  
  
  getStatusColor(val){
    if(val == 0 || val == null){  
      return  { color: '#f5035c' } ;
    }else if(val = 1){ 
      return  { color: '#028e55' } ;
    }
  }

}
