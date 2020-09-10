import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import {
  NavController,
  ToastController,
  LoadingController,
  AlertController,
} from "@ionic/angular";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  credentialsForm: FormGroup;
  constructor(
    public location: Location,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  // TODO: loading rehefa login
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    this.authService.login(this.credentialsForm.value).subscribe();
  }

  goBack() {
    //this.location.back();
    this.navCtrl.navigateRoot("/home");
  }
}
