import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/service/profile/profile.service';
import { Api } from 'src/app/service/api';
import { Location } from '@angular/common';
import { SpinnerService } from 'src/app/service/spinner/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  name: string;
  data: Object;
  formSubmitAttemptStep1: any;
  public loginForm: FormGroup;
  public show:boolean;
  showSpinner: boolean;
  constructor(
    private modalController: ModalController,
    private navCtrl: NavController,
    public auth: AuthService,
    public profile: ProfileService,
    public api: Api,
    public location: Location,
    private spinnerService: SpinnerService
  ) {

   }
  

  ngOnInit() {

    new Promise((resolve, reject) => {
      this.auth
        .isToken()
        .then(
          (res: any) => {
            console.log('test',res);
              if(res){
                this.navCtrl.navigateRoot('home');
              }
          },
          error => {
           console.log('Error');
          }
        );
    });

    this.profile.getDatas().subscribe(
      data=>{ 
        this.data = data;
        console.log(this.data);
      },
      (err) => {
      console.log(err);
    });

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    
   }

   isFieldInvalid(dataFormStep,field:string) {
  return (
    (!dataFormStep.get(field).valid && dataFormStep.get(field).touched) ||
    (dataFormStep.get(field).untouched && this.formSubmitAttemptStep1 && !dataFormStep.get(field).valid)
  );
}

  login() {
    this.formSubmitAttemptStep1 = true;

    if(this.loginForm.valid){  
      this.auth.login(this.loginForm.value.username,this.loginForm.value.password).subscribe(
        data => {
          //this.alertService.presentToast("Logged In");
          this.navCtrl.navigateRoot('home');
          console.log("logger 1");
        },
        error => {
          console.log(error);
        },
        () => {
          //this.dismissLogin();
          //this.navCtrl.navigateRoot('auth/register');
          console.log("logger 2");
        }
      );
    }
  }

  goBack(){
    this.location.back();
  }

}