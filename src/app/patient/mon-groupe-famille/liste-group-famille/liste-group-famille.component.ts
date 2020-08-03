import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils/utils.service';
import { AuthService } from 'src/app/service/auth.service';
import { SpinnerService } from 'src/app/service/spinner/spinner.service';
import { ActivatedRoute,Params,Router } from '@angular/router';

@Component({
  selector: 'app-liste-group-famille',
  templateUrl: './liste-group-famille.component.html',
  styleUrls: ['./liste-group-famille.component.scss'],
})
export class ListeGroupFamilleComponent implements OnInit {
  listeGroup: any;

  constructor(private route: ActivatedRoute,public utilservice : UtilsService,public auth: AuthService,private spinnerService: SpinnerService) { }

  async ngOnInit() {
    this.getGroupFamilles();
  }
  async getGroupFamilles(){
    this.listeGroup = await this.utilservice.getGroupFamille();
    console.log(this.listeGroup);
  }

}
