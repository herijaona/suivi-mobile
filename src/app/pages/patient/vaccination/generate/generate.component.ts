import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { IUserPraticien } from 'src/app/Interfaces/praticien.interface';
import { GlobalInteraction } from 'src/app/pages/global.interaction';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { PatientService } from 'src/app/services/patient.service';
import { PraticienService } from 'src/app/services/praticien.service';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss'],
})
export class GenerateComponent implements OnInit {
  @Input() test: String;
  @Input() functions;

  public countries;
  public cities;
  public center_health;
  // praticiens: IUserPraticien[];
  praticiens: {};
  public propositionForm: FormGroup;
  showCheckBoxAssoc = false;
  after_praticien_choice = false;

  selected: any;
  constructor(
    private praticienSrv: PraticienService,
    private patientServc: PatientService,
    private navCtrl: NavController,
    private navParms: NavParams,
    private modalCtrl: ModalController,
    private globalDataSrvc: GlobalDataService,
    private globalInt: GlobalInteraction,
  ) { }

  async ngOnInit() {
    this.after_praticien_choice = false;

    this.navParms.get('country') != undefined
      ? (this.countries = this.navParms.get('country'))
      : this.getAllCountries();

    this.propositionForm = new FormGroup({
      praticien: new FormControl({ value: this.praticiens, disabled: false }, [
        Validators.required,
      ]),
      center_health: new FormControl({ value: this.functions, disabled: false }, [
        Validators.required,
      ]),
      country: new FormControl({ value: this.countries, disabled: false }, [
        Validators.required,
      ]),
      city: new FormControl({ value: this.cities, disabled: false }, [
        Validators.required,
      ]),
      typeRdv: new FormControl('', [Validators.required]),
      // dateRdv: new FormControl('', [Validators.required]),
      // heureRdv: new FormControl('', [Validators.required]),
      description: new FormControl(),
      chekcboxAssoc: new FormControl(),
    });
  }
  backToList() {
    this.dismiss();
    this.navCtrl.navigateRoot('/patient/rendez-vous');
  }

  async cancel() {
    console.log(' cancel ');
    this.backToList();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  getCityByCountry(id) {
    this.globalDataSrvc.getCity(id).subscribe((data) => this.cities = data);
  }

  getAllCountries() {
    this.globalDataSrvc.getCountry().subscribe((data) => this.countries = data);
  }

  getCenterByCity(_idCity) {
    this.globalDataSrvc.getCenterHealthByCity(_idCity).subscribe((data) => { console.log("LL: GenerateComponent -> getCenterByCity -> this.center_health", data); this.center_health = data });
  }
  getPraticienByCenter(_idCenter) {
    this.globalDataSrvc.getPraticienByCenter(_idCenter).subscribe((data) => { console.log("LL: GenerateComponent -> getCenterByCity -> this.center_health", data); this.praticiens = data });
  }
  postVaccinGeneration(_idPractitioner) {
    this.patientServc.postVaccinGeneration(_idPractitioner).subscribe((data) => console.log("LL: GenerateComponent -> postVaccinGeneration -> data", data));

  }
}
