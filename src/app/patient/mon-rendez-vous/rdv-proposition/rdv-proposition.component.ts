import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils/utils.service';
import { SpinnerService } from 'src/app/service/spinner/spinner.service';

@Component({
  selector: 'app-rdv-proposition',
  templateUrl: './rdv-proposition.component.html',
  styleUrls: ['./rdv-proposition.component.scss'],
})
export class RdvPropositionComponent implements OnInit {

  consultationProgress: any = [];
  constructor(public utilservice : UtilsService, private spinnerService: SpinnerService) { }

  async ngOnInit() {
    console.log('RdvPropositionComponent started')
    this.consultationProgress = await this.utilservice.getConsultationProgressByID();
    console.log("RdvPropositionComponent -> ngOnInit -> this.consultationProgress", this.consultationProgress)
  }

  getStatusColor(val){
    if(val == 0 || val == null){  
      return  { color: '#f5035c' } ;
    }else if(val = 1){ 
      return  { color: '#028e55' } ;
    }
  }

}
