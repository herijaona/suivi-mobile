import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils/utils.service';
import { AuthService } from 'src/app/service/auth.service';
import { SpinnerService } from 'src/app/service/spinner/spinner.service';
import { ActivatedRoute, Params, Router, NavigationExtras } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-liste-group-famille',
  templateUrl: './liste-group-famille.component.html',
  styleUrls: ['./liste-group-famille.component.scss'],
})
export class ListeGroupFamilleComponent implements OnInit {
  listeGroup: any;

  constructor(
    private route: ActivatedRoute,
    public utilservice : UtilsService,
    public auth: AuthService,
    private spinnerService: SpinnerService,
    public router: Router
    ) { }

  async ngOnInit() {
    this.getGroupFamilles();
  }

  async getGroupFamilles(){
    const { value }  = await Storage.get({ key: 'userID'});
    this.listeGroup = await this.utilservice.getGroupFamilleListByPatient(value);
    console.log(this.listeGroup);
  }
  
  details(item){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "id": item.id,
        "name": item.groupFamily.designation,
        "id_group": item.groupFamily.id,
      }
    }
    this.router.navigate(['patient/groupe-famille/detail-groupe-famille/'+item.id], navigationExtras);
  }


}
