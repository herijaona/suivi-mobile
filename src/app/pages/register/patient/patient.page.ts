import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NavController } from '@ionic/angular';
import { IRegisterPatient } from 'src/app/Interfaces/patient.interface';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { PatientService } from "src/app/services/patient.service";
import { GlobalInteraction } from '../../global.interaction';

@Component({
  selector: "app-patient",
  templateUrl: "./patient.page.html",
  styleUrls: ["./patient.page.scss"],
})
export class PatientPage implements OnInit {
  public patientRegisterForm: FormGroup;
  private IDENTIFIANT = "Identifiant";
  public _id = this.IDENTIFIANT;
  public ROLE = "ROLE_PATIENT";
  public country;
  public city;
  public validRegister = false;
  public validation_msg = {
    first_name: [{ type: "required", message: "Prénom obligatoire" }],
    last_name: [{ type: "required", message: "Nom obligatoire" }],
    date_on_born: [
      { type: "required", message: "Date de naissance obligatoire" },
    ],
    state: [{ type: "required", message: "Pays obligatoire" }],
    city: [{ type: "required", message: "Selectionner un pays , Ville obligatoire" }],
    sexe: [{ type: "required", message: "Sexe obligatoire" }],
    address: [{ type: "required", message: "Adresse obligatoire" }],
    email: [{ type: "required", message: "Email obligatoire" }],
    password: [{ type: "required", message: "Mot de passe obligatoire" }],
    phone: [{ type: "required", message: "Phone obligatoire" }],
    father_name: [{ type: "required", message: "Nom du père obligatoire" }],
    mother_name: [{ type: "required", message: "Nom de la mère obligatoire" }],
  };

  constructor(private patientSrvc: PatientService, private globalSrvc: GlobalDataService, private navCtrl: NavController, private globalEl: GlobalInteraction) { }

  ngOnInit() {
    this.createForm();
    this.globalSrvc.getCountry().subscribe((data) => this.country = data);
  }

  createForm() {
    this.patientRegisterForm = new FormGroup({
      first_name: new FormControl("", Validators.required),
      last_name: new FormControl("", Validators.required),
      date_on_born: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      sexe: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required]),
      type_patient: new FormControl("", [Validators.required]),
      father_name: new FormControl(""),
      mother_name: new FormControl(""),
    });
  }

  async register() {
    this.globalEl.presentLoading();
    if (this.patientRegisterForm.valid) {
      Object.keys(this.patientRegisterForm.value).forEach((key) => {
        // console.log("valid", this.patientRegisterForm.value[key]);
      });
      const dataRegister: IRegisterPatient = {
        first_name: this.patientRegisterForm.value['first_name'],
        last_name: this.patientRegisterForm.value['last_name'],
        date_on_born: this.patientRegisterForm.value['date_on_born'],
        state: this.patientRegisterForm.value['state'],
        city: this.patientRegisterForm.value['city'],
        sexe: this.patientRegisterForm.value['sexe'],
        address: this.patientRegisterForm.value['address'],
        email: this.patientRegisterForm.value['email'],
        password: this.patientRegisterForm.value['password'],
        phone: this.patientRegisterForm.value['phone'],
        roles: this.ROLE,
        username: this._id,
        type_patient: this.patientRegisterForm.value['type_patient'],
        father_name: this.patientRegisterForm.value['father_name'] == undefined ? '' : this.patientRegisterForm.value['father_name'],
        mother_name: this.patientRegisterForm.value['mother_name'] == undefined ? '' : this.patientRegisterForm.value['mother_name'],
      }
      this.patientSrvc.registerPatient(dataRegister).subscribe(data => {
        if (data) {
          // this.navCtrl.navigateRoot('/login');
          this.navCtrl.navigateRoot('/account-activation');

        }
        this.globalEl.dismissLoading();

      });
    } else {
      // console.log("NOT valid", this.patientRegisterForm);
    }
  }

  getRndInt(min = 10000, max = 100000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  myUserName() {
    if (!this.patientRegisterForm.valid || this._id != this.IDENTIFIANT) {
      // if (!this.patientRegisterForm.valid) {
      return;
    }
    if (this.patientRegisterForm.value['date_on_born'] != '' && this.patientRegisterForm.value['sexe'] != '') {
      this._id = this.createUsername(this.patientRegisterForm.value['date_on_born'], this.patientRegisterForm.value['sexe'])
    }
  }

  createUsername(birth: Date, gender: String) {
    const dateFormat = birth.split('T')[0];
    // console.log("PatientPage -> createUsername -> birthday", birthday)
    const sexe = gender.substring(0, 1);
    let mois = "00";
    let jour = "00";
    let annee = "0000";
    const birthday = dateFormat.split('-');
    mois = birthday[1];
    // console.log("PatientPage -> createUsername -> mois", mois)
    annee = birthday[0];
    // annee = birthday.getFullYear()[2];
    // console.log("PatientPage -> createUsername -> annee", annee)
    jour = birthday[2];
    // jour = birthday.getDay()[0]
    // console.log("PatientPage -> createUsername -> jour", jour)
    const username = sexe + annee + mois + jour + this.getRndInt();
    // console.log("PatientPage -> createUsername -> username", username)
    return username;
  }

  getCityByCountry(id) {
    this.globalSrvc.getCity(id).subscribe((data) => this.city = data);
  }
}
