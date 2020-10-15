import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-praticien",
  templateUrl: "./praticien.page.html",
  styleUrls: ["./praticien.page.scss"],
})
export class PraticienPage implements OnInit {
  public praticienRegisterForm: FormGroup;
  public _id = "Identifiant";
  constructor() {}

  ngOnInit() {
    this.praticienRegisterForm = new FormGroup({
      lastName: new FormControl("", [Validators.required]),
      firstName: new FormControl("", [Validators.required]),
      birthday: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      function: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }
}
