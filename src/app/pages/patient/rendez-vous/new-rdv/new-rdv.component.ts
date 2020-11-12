import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { IPatient, IRdvPatient } from 'src/app/Interfaces/patient.interface';
import { IUserPraticien } from 'src/app/Interfaces/praticien.interface';
import { GlobalInteraction } from 'src/app/pages/global.interaction';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { PatientService } from 'src/app/services/patient.service';
import { PraticienService } from 'src/app/services/praticien.service';

@Component({
  selector: 'app-new-rdv',
  templateUrl: './new-rdv.component.html',
  styleUrls: ['./new-rdv.component.scss'],
})
export class NewRdvComponent implements OnInit {
  @Input() test: String;
  @Input() functions;

  public countries;
  public cities;
  praticiens: IUserPraticien[];
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
    private storage: Storage,
    private globalDataSrvc: GlobalDataService,
    private globalInt: GlobalInteraction
  ) { }

  async ngOnInit() {
    this.after_praticien_choice = false;

    // this.praticiens = this.navParms.get('praticiens');
    this.navParms.get('functions') != undefined
      ? (this.functions = this.navParms.get('functions'))
      : this.getAllfonction();

    this.propositionForm = new FormGroup({
      praticien: new FormControl({ value: this.praticiens, disabled: false }, [
        Validators.required,
      ]),
      fonction: new FormControl({ value: this.functions, disabled: false }, [
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

  isFieldInvalid(dataFormStep, field: string) {
    return (
      (!dataFormStep.get(field).valid && dataFormStep.get(field).touched) ||
      (dataFormStep.get(field).untouched && !dataFormStep.get(field).valid)
    );
  }
  getAllfonction() {
    this.after_praticien_choice = false;
    this.praticienSrv.getPraticienFunctions().subscribe((data) => {
      this.functions = data;
    });
  }

  getCountryByFunction(_idFunction) {
    this.globalDataSrvc
      .getCountryByPratictitionerFunction(_idFunction)
      .subscribe((data: []) => {
        console.log(
          'LL: NewRdvComponent -> getCountryByFunction -> data',
          data
        );
        if (data.length == 0) {
          const VIDE = "Il n'y a pas de praticien présent dans ce pays";
          console.warn(
            'LL: NewRdvComponent -> getCountryByFunction -> VIDE',
            VIDE
          );
          this.globalInt.presentToast(VIDE);
        }
        this.countries = data;
      });
  }

  getCityByFunctionAndCountry(_idFunction, _idCountry) {
    this.after_praticien_choice = false;
    this.globalDataSrvc
      .getCityByPractitionerFunctionAndCountry(_idFunction, _idCountry)
      .subscribe((data: []) => {
        console.log(
          'LL: NewRdvComponent -> getCityByFunctionAndCountry -> data',
          data
        );

        if (data.length == 0) {
          const VIDE = "Il n'y a pas de praticien présent dans ce pays";
          console.warn(
            'LL: NewRdvComponent -> getCityByFunctionAndCountry -> VIDE',
            VIDE
          );
          this.globalInt.presentToast(VIDE);
        }
        this.cities = data;
      });
  }

  getPractitionerByFunctionCountryAndCity(_idFunction, _idCountry, _idCity) {
    this.after_praticien_choice = false;
    this.globalDataSrvc
      .getPractitionerByFunctionCountryAndCity(_idFunction, _idCountry, _idCity)
      .subscribe((data: []) => {
        console.log(
          'LL: NewRdvComponent -> getPractitionerByFunctionCountryAndCity -> data',
          data
        );

        if (data.length == 0) {
          const VIDE = "Il n'y a pas de praticien présent dans ce pays";
          console.warn(
            'LL: NewRdvComponent -> getPractitionerByFunctionCountryAndCity -> VIDE',
            VIDE
          );
          this.globalInt.presentToast(VIDE);
        }
        this.praticiens = data;
      });
  }

  chekcPractitionerAssocOrNot(_idPraticien) {
    const OK = 'OK';
    this.patientServc
      .chekIfPractitionerIsAssociated(_idPraticien)
      .subscribe((isOK: { status }) => {
        console.log("LL: NewRdvComponent -> chekcPractitionerAssocOrNot -> isOK", isOK)
        if (isOK.status === OK) {
          this.showCheckBoxAssoc = true;
        } else {
          this.showCheckBoxAssoc = false;
        }
        this.after_praticien_choice = true;
      });
  }
  async propose() {
    // const prop: IRdvPatient = {
    //   description: this.propositionForm.value.description,
    //   praticien: this.propositionForm.value.praticien,
    //   // typeRdv: this.propositionForm.value.typeRdv,
    //   // dateRdv: this.propositionForm.value.dateRdv,
    //   // heureRdv: this.propositionForm.value.heureRdv,
    //   // id: await this.praticienSrvc.getUserIDByStorage(),
    //   id: 0,
    // };

    if (this.propositionForm.valid) {
      let data_to_send;
      if (this.propositionForm.value['chekcboxAssoc'] == true) {

        data_to_send = {
          praticien: this.propositionForm.value['praticien'],
          typeRdv: this.propositionForm.value['typeRdv'],
          objet: this.propositionForm.value['description'],
          Associer: 1,
        };
      } else {
        data_to_send = {
          praticien: this.propositionForm.value['praticien'],
          typeRdv: this.propositionForm.value['typeRdv'],
          objet: this.propositionForm.value['description'],
        };
      }
      console.error("###################=>  LL: NewRdvComponent -> propose -> data_to_send", data_to_send)
      this.patientServc.proposeRdv(data_to_send).subscribe((dataV) => {
        console.log("###################=> LL: NewRdvComponent -> propose -> data", dataV)
        this.backToList();
      })
    } else {
      console.log(' not valid ');
      this.globalInt.presentToast('completé les champs !!');
    }
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
}
