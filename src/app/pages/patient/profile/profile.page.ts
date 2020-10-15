import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IProfilePatient } from "src/app/Interfaces/patient.interface";
import { PatientService } from "src/app/services/patient.service";

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
  validation_msg = {};
  public type_patient;
  constructor(private patienSrvc: PatientService) {
    this.getProfile();
  }

  ngOnInit() {}

  buildForm(data: IProfilePatient) {
    this.patientRegisterForm = new FormGroup({
      // lastName: new FormControl("", [Validators.required]),
      // firstName: new FormControl("", [Validators.required]),
      birthday: new FormControl("", [Validators.required]),
      // description: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      function: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      // password: new FormControl("", [Validators.required]),
    });

    if (data.type_patient == 1) {
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
      Object.keys(this.patientRegisterForm.value).forEach((key) => {
        console.log("valid", this.patientRegisterForm.value[key]);
      });
    } else {
      console.log("NOT valid", this.patientRegisterForm);

      Object.keys(this.patientRegisterForm.value).forEach((key) => {
        console.log("NOT valid", this.patientRegisterForm.value[key]);
      });
    }
  }
  //Comparaison select
  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id == e2.id : e1 == e2;
  }

  getProfile() {
    this.patienSrvc.getProfile().subscribe((data: IProfilePatient) => {
      console.log(data);
      this.profile = data;
      // this.profile.date_on_born = new Date(data.date_on_born);
      this.buildForm(data);
      this.type_patient = data.type_patient == 1 ? "Enfant" : "Adult";
    });
  }
}
