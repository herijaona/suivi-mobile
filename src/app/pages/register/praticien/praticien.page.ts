import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IRegisterPraticien } from 'src/app/Interfaces/praticien.interface';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { PraticienService } from 'src/app/services/praticien.service';

@Component({
  selector: 'app-praticien',
  templateUrl: './praticien.page.html',
  styleUrls: ['./praticien.page.scss'],
})
export class PraticienPage implements OnInit {
  public praticienRegisterForm: FormGroup;
  private IDENTIFIANT = 'Identifiant';
  public _id = this.IDENTIFIANT;
  public country;
  public city;
  public validRegister = false;
  public functions;
  private ROLE = 'ROLE_PRATICIEN';

  public validation_msg = {
    first_name: [{ type: 'required', message: 'Prénom obligatoire' }],
    last_name: [{ type: 'required', message: 'Nom obligatoire' }],
    date_on_born: [
      { type: 'required', message: 'Date de naissance obligatoire' },
    ],
    state: [{ type: 'required', message: 'Pays obligatoire' }],
    city: [{ type: 'required', message: 'Selectionner un pays , Ville obligatoire' }],
    sexe: [{ type: 'required', message: 'Sexe obligatoire' }],
    address: [{ type: 'required', message: 'Adresse obligatoire' }],
    email: [{ type: 'required', message: 'Email obligatoire' }],
    password: [{ type: 'required', message: 'Mot de passe obligatoire' }],
    function: [{ type: 'required', message: 'fonction obligatoire' }],
    phone: [{ type: 'required', message: 'Phone obligatoire' }],
    father_name: [{ type: 'required', message: 'Nom du père obligatoire' }],
    mother_name: [{ type: 'required', message: 'Nom de la mère obligatoire' }],
  };

  constructor(private praticienSrv: PraticienService, private globalSrvc: GlobalDataService, private navCtrl: NavController) {
    this.initializeData();
  }

  ngOnInit() {

  }

  initializeData() {
    this.createForm();
    this.globalSrvc.getCountry().subscribe((data) => this.country = data);

    this.praticienSrv.getPraticienFunctions().subscribe((data) => {
      this.functions = data;
    });
  }
  createForm() {
    this.praticienRegisterForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      date_on_born: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      sexe: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      function: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
    });
  }
  register() {
    // console.log("register");
    if (this.praticienRegisterForm.valid) {
      Object.keys(this.praticienRegisterForm.value).forEach((key) => {
        // console.log("valid", this.praticienRegisterForm.value[key]);
      });
      const dataRegister: IRegisterPraticien = {
        first_name: this.praticienRegisterForm.value.first_name,
        last_name: this.praticienRegisterForm.value.last_name,
        date_born: this.praticienRegisterForm.value.date_on_born,
        state: this.praticienRegisterForm.value.state,
        city: this.praticienRegisterForm.value.city,
        sexe: this.praticienRegisterForm.value.sexe,
        fonction: this.praticienRegisterForm.value.function,
        address: this.praticienRegisterForm.value.address,
        email: this.praticienRegisterForm.value.email,
        password: this.praticienRegisterForm.value.password,
        phone: this.praticienRegisterForm.value.phone,
        roles: this.ROLE,
        username: this._id,
      };
      this.praticienSrv.registerPraticien(dataRegister).subscribe(data => {
        if (data) {
          // console.log("PraticienPage -> register -> data", data)
          this.navCtrl.navigateRoot('/login');
        }
      });
    } else {
      // console.log("NOT valid", this.praticienRegisterForm);
    }
  }

  getRndInt(min = 10000, max = 100000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  myUserName() {
    if (!this.praticienRegisterForm.valid || this._id != this.IDENTIFIANT) {
      return;
    }
    if (this.praticienRegisterForm.value.date_on_born != '' && this.praticienRegisterForm.value.sexe != '') {
      this._id = this.createUsername(this.praticienRegisterForm.value.date_on_born, this.praticienRegisterForm.value.sexe);
    }
  }

  createUsername(birth: any, gender: String) {
    const dateFormat = birth.split('T')[0];
    // console.log("PatientPage -> createUsername -> birthday", birthday)
    const sexe = gender.substring(0, 1);
    let mois = '00';
    let jour = '00';
    let annee = '0000';
    const birthday = dateFormat.split('-');

    mois = birthday[1];
    // console.log("PatientPage -> createUsername -> mois", mois)
    annee = birthday[0];
    // annee = birthday.getFullYear()[2];
    // console.log("PatientPage -> createUsername -> annee", annee)
    jour = birthday[2];
    // jour = birthday.getDay()[0]
    // console.log("PatientPage -> createUsername -> jour", jour)
    const fname = (this.praticienRegisterForm.value.first_name.substring(0, 1).toLowerCase()).replace(/ /g, '');
    const lname = (this.praticienRegisterForm.value.last_name.toLowerCase()).replace(/ /g, '');

    const username = fname + lname + annee + mois + jour + this.getRndInt();
    // console.log("PatientPage -> createUsername -> username", username)
    return username;
  }

  getCityByCountry(id) {
    this.globalSrvc.getCity(id).subscribe((data) => this.city = data);
  }
}
