import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoadingController, ToastController } from '@ionic/angular';
import { IProfilePatient } from "src/app/Interfaces/patient.interface";
import { GlobalDataService } from 'src/app/services/global-data.service';
import { PatientService } from "src/app/services/patient.service";
import { GlobalInteraction } from '../../global.interaction';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  ios: boolean;
  showSearchbar: boolean;
  public patientRegisterForm: FormGroup;
  public _id = "Identifiant";
  public profile: IProfilePatient;
  private OK = "ok";
  public type_patient;
  public countries;
  public cities;
  public citiesBorn;
  isLoading = false;
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
  constructor(private patienSrvc: PatientService, private globalSrvc: GlobalDataService, private globalInteract: GlobalInteraction, private loadingController: LoadingController) {
    this.globalSrvc.getCountry().subscribe((result) => {
      this.countries = result;
      this.getProfile();
    });
  }

  ngOnInit() {
    this.globalInteract.presentLoading();

  }

  buildForm(data: IProfilePatient) {
    this.patientRegisterForm = new FormGroup({
      // lastName: new FormControl("", [Validators.required]),
      // firstName: new FormControl("", [Validators.required]),
      birthday: new FormControl("", [Validators.required]),
      // description: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      countryBorn: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      cityBorn: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required]),
      // password: new FormControl("", [Validators.required]),
    });

    if (data.typePatient != 1) {
      this.patientRegisterForm.addControl(
        "father_name",
        new FormControl("", [Validators.required])
      );
      this.patientRegisterForm.addControl(
        "mother_name",
        new FormControl("", [Validators.required])
      );
    }
  }

  async update() {
    if (this.patientRegisterForm.valid) {
      this.globalInteract.presentLoading();

      Object.keys(this.patientRegisterForm.value).forEach((key) => {
        // console.log("valid", this.patientRegisterForm.value[key]);
        const data_updated = {
          address: this.patientRegisterForm.value["address"],
          cityBorn: this.patientRegisterForm.value["cityBorn"],
          countryBorn: this.patientRegisterForm.value["countryBorn"],
          email: this.patientRegisterForm.value["email"],
          fatherName: this.patientRegisterForm.value['father_name'] == undefined ? '' : this.patientRegisterForm.value['father_name'],
          id: this.profile.id,
          motherName: this.patientRegisterForm.value['father_name'] == undefined ? '' : this.patientRegisterForm.value['mother_name'],
          nameCity: this.patientRegisterForm.value["city"],
          nameState: this.patientRegisterForm.value["state"],
          phone: this.patientRegisterForm.value["phone"],
        }

        this.patienSrvc.updateProfile(data_updated).subscribe((data) => {

          if (data == this.OK) {
            this.globalInteract.dismissLoading();
            this.globalInteract.presentToast('Profile mis à jour');
          } else {
            this.globalInteract.presentToast('Profile non mis à jour !!!')
          }
        });
      });
    } else {
      // console.log("NOT valid", this.patientRegisterForm);

      Object.keys(this.patientRegisterForm.value).forEach((key) => {
        // console.log("NOT valid", this.patientRegisterForm.value[key]);
      });
    }
  }
  //Comparaison select
  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id == e2.id : e1 == e2;
  }
  compareFnInv(e1: any, e2: any): boolean {
    return e1 && e2 ? e1 == e2 : e1.id == e2.id;
  }

  getProfile() {

    this.patienSrvc.getProfile().subscribe(async (data: IProfilePatient[]) => {
      // console.log(data);
      this.profile = data[0];

      this.profile.nameState = data[0].namestate;
      this.globalSrvc.getCity(this.profile.nameState).subscribe(data2 => {
        this.cities = data2;
        this.profile.nameCity = data[0].nameCity;
      })
      data[0].countryBorn == null ? this.profile.countryBorn = data[0].namestate : this.profile.countryBorn = data[0].countryBorn;
      this.globalSrvc.getCity(this.profile.countryBorn).subscribe(data3 => {
        this.citiesBorn = data3;
        data[0].cityBorn == null ? this.profile.cityBorn = data[0].nameCity : this.profile.cityBorn = data[0].cityBorn;
        this.globalInteract.dismissLoading()
      })

      this.profile.dateOnBorn = data[0].dateOnBorn.date;
      this.profile.createdAt = data[0].createdAt.date;
      // this.profile.date_on_born = new Date(data.date_on_born);
      this.buildForm(data[0]);
      this.type_patient = data[0].typePatient == 1 ? "Adult" : "Enfant";

    });
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  getCityByCountry(id) {
    // console.log("LL: ProfilePage -> getCityByCountry -> id", id)
    // console.log("LL: ProfilePage -> getCityByCountry -> id", this.profile)
    this.globalSrvc.getCity(id).subscribe((data) => this.cities = data);
  }
  getCityByCountryBorn(id) {
    // console.log("LL: ProfilePage -> getCityByCountryBorn -> id", id)
    // console.log("LL: ProfilePage -> getCityByCountryBorn -> id", this.profile)
    this.globalSrvc.getCity(id).subscribe((data) => this.citiesBorn = data);
  }
}
