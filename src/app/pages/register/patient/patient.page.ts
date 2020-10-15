import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PatientService } from "src/app/services/patient.service";

@Component({
  selector: "app-patient",
  templateUrl: "./patient.page.html",
  styleUrls: ["./patient.page.scss"],
})
export class PatientPage implements OnInit {
  public patientRegisterForm: FormGroup;
  public _id = "Identifiant";
  validation_msg = {
    first_name: [{ type: "required", message: "Prénom obligatoire" }],
    last_name: [{ type: "required", message: "Nom obligatoire" }],
    date_on_born: [
      { type: "required", message: "Date de naissance obligatoire" },
    ],
    state: [{ type: "required", message: "Pays obligatoire" }],
    city: [{ type: "required", message: "Ville obligatoire" }],
    sexe: [{ type: "required", message: "Sexe obligatoire" }],
    address: [{ type: "required", message: "Adresse obligatoire" }],
    email: [{ type: "required", message: "Email obligatoire" }],
    password: [{ type: "required", message: "Mot de passe obligatoire" }],
    phone: [{ type: "required", message: "Phone obligatoire" }],
  };

  constructor(private patientSrvc: PatientService) {}

  ngOnInit() {
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
    });
  }

  async register() {
    if (this.patientRegisterForm.valid) {
      Object.keys(this.patientRegisterForm.value).forEach((key) => {
        console.log("valid", this.patientRegisterForm.value[key]);
      });
    } else {
      console.log("NOT valid", this.patientRegisterForm);
      this.patientSrvc.registerPatient(this.patientRegisterForm.value);
    }
  }
}
