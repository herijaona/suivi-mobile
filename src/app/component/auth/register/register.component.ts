import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ConstantService } from 'src/app/helper/constant/constant.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { UtilsService } from 'src/app/service/utils/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  array1: any;
  test: string[][];
  select: boolean = false;
  data: any;
  public registerForm: FormGroup;
  formSubmitAttemptStep1: any;
  constructor(
    public auth: AuthService, 
    public constant: ConstantService, 
    public location: Location,
    public stateService : UtilsService) { }

  ngOnInit() {
    this.getState();

    this.test  = this.constant.getIsRole();

    this.registerForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      date_on_born: new FormControl('', [Validators.required]),
      id_address: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      roles: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      type_patient: new FormControl('', [Validators.required]),
      sexe: new FormControl('', [Validators.required])
    });
    
  }

  isFieldInvalid(dataFormStep,field:string) {
    return (
      (!dataFormStep.get(field).valid && dataFormStep.get(field).touched) ||
      (dataFormStep.get(field).untouched && this.formSubmitAttemptStep1 && !dataFormStep.get(field).valid)
    );
  }
  
  register() {
    this.formSubmitAttemptStep1 = true;

    if(this.registerForm.valid){
      let data = {
        "first_name":this.registerForm.value.first_name,
        "last_name":this.registerForm.value.last_name,
        "username":this.registerForm.value.username,
        "date_on_born":this.registerForm.value.date_on_born,
        "id_address": this.registerForm.value.id_address,
        "telephone":this.registerForm.value.telephone,
        "roles":this.registerForm.value.roles,
        "email":this.registerForm.value.email,
        "password":this.registerForm.value.password,
        "type_patient": this.registerForm.value.type_patient,
        "sexe":this.registerForm.value.sexe
      }
      this.auth.register(data).subscribe(
        data => {
          console.log("logger 1");
        },
        error => {
          console.log(error);
        },
        () => {
          console.log("logger 2");
        }
      );
    }
  }

  goBack(){
    this.location.back();
  }

  getState(){
    this.stateService.state().subscribe(
      data=>{ 
        this.data = data;
        for(let i of this.data){
          console.log (i.nameState);
        }
      },
      (err) => {
      console.log(err);
    });
  }

}
