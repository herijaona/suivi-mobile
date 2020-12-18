import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoadingController, ToastController } from '@ionic/angular';
import { IProfilePatient } from "src/app/Interfaces/patient.interface";
import { GlobalDataService } from 'src/app/services/global-data.service';
import { PatientService } from "src/app/services/patient.service";
import { PraticienService } from 'src/app/services/praticien.service';
import { GlobalInteraction } from '../../global.interaction';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  ios: boolean;
  showSearchbar: boolean;
  public praticienFormGroup: FormGroup;
  public _id = "Identifiant";
  public profile;
  private OK = "ok";
  public centre_name;
  public centreid;
  public centres_names;
  public countries;
  public cities;
  public citiesBorn;
  public fonction;
  public fonctions;
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
  constructor(private praticienSrvc: PraticienService, private globalSrvc: GlobalDataService, private globalInteract: GlobalInteraction, private loadingController: LoadingController) {
    this.globalSrvc.getCountry().subscribe((result) => {
      this.countries = result;
      this.getProfile();
    });
  }

  ngOnInit() {
    this.globalInteract.presentLoading();

  }

  buildForm(data) {
    this.praticienFormGroup = new FormGroup({
      // lastName: new FormControl("", [Validators.required]),
      // firstName: new FormControl("", [Validators.required]),
      birthday: new FormControl(),
      // description: new FormControl("", [Validators.required]),
      state: new FormControl(),
      countryBorn: new FormControl(),
      city: new FormControl(),
      cityBorn: new FormControl(),
      centre: new FormControl(),
      gender: new FormControl(),
      address: new FormControl(),
      email: new FormControl("", [Validators.required]),
      phone: new FormControl(),
      fonction: new FormControl(),
    });


  }

  async update() {
    if (this.praticienFormGroup.valid) {
      this.globalInteract.presentLoading();
        // console.log("valid", this.praticienFormGroup.value[key]);
        const data_updated = {
          adress: this.praticienFormGroup.value["address"],
          cityBorn: this.praticienFormGroup.value["cityBorn"],
          CountryOnBorn: this.praticienFormGroup.value["countryBorn"],
          email: this.praticienFormGroup.value["email"],
          city_fonction: this.praticienFormGroup.value["city"],
          country_fonction: this.praticienFormGroup.value["state"],
          numero: this.praticienFormGroup.value["phone"],
          center_health: this.praticienFormGroup.value["centre"],
          fonction: this.praticienFormGroup.value["fonction"],
        }
        console.log("LL: ProfilePage -> update -> data_updated", data_updated)

        this.praticienSrvc.updateProfile(data_updated).subscribe((data) => {
        console.log("LL: ProfilePage -> update -> data", data)

          if (data == this.OK) {
            this.globalInteract.dismissLoading();
            this.globalInteract.presentToast('Profile mis à jour');
          } else {
            this.globalInteract.presentToast('Profile non mis à jour !!!')
          }
        });
    } else {
      console.log("NOT valid", this.praticienFormGroup);

      Object.keys(this.praticienFormGroup.value).forEach((key) => {
        console.log("NOT valid", this.praticienFormGroup.value[key]);
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

    this.praticienSrvc.getProfile().subscribe(async (response: any) => {
    console.log("LL: ProfilePage -> getProfile -> response", response)
      const data = response.profile;
      this.centre_name = response.profile[1]?.centreid != null ? response.profile[1].centreName : '';
      this.centreid = response.profile[1]?.centreid != null ? response.profile[1].centreid : '';
      console.log("LL: ProfilePage -> getProfile -> centre_name", this.centre_name)
      // console.log(data);
      this.profile = data[0];
      this.fonction = response.profile[0].fonction;
      this.getFonction();
      this.profile.nameState = data[0].countryFonction;
      this.globalSrvc.getCity(this.profile.nameState).subscribe(data2 => {
        this.cities = data2;
        this.profile.nameCity = data[0].CityFonction;
        this.getHealthByCity(data[0].CityFonction);
      })
      data[0].countryBorn == null ? this.profile.countryBorn = data[0].countryFonction : this.profile.countryBorn = data[0].countryBorn;
      this.globalSrvc.getCity(this.profile.countryBorn).subscribe(data3 => {
        this.citiesBorn = data3;
        data[0].cityBorn == null ? this.profile.cityBorn = data[0].CityFonction : this.profile.cityBorn = data[0].cityBorn;
        this.globalInteract.dismissLoading()
      })

      this.profile.dateOnBorn = data[0].dateBorn.date;
      this.profile.createdAt = data[0].createdAt.date;
      // this.profile.date_on_born = new Date(data.date_on_born);
      this.buildForm(data[0]);
      // this.type_patient = data[0].typePatient == 1 ? "Adult" : "Enfant";

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

  getHealthByCity(idCity){
    this.globalSrvc.getCenterHealthByCity(idCity).subscribe((data) =>{ 
    console.log("LL: ProfilePage -> getHealthByCity -> data", data)
      this.centres_names = data
    });
  }

  getFonction(){
    this.praticienSrvc.getPraticienFunctions().subscribe((data) => {
    console.log("LL: ProfilePage -> getFonction -> data", data)
      this.fonctions = data;
    });
  }

}
