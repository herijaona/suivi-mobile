import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-activation',
  templateUrl: './account-activation.page.html',
  styleUrls: ['./account-activation.page.scss'],
})
export class AccountActivationPage implements OnInit {
  public code;
  constructor(private authSrvc: AuthService) { }

  ngOnInit() {
  }

  activateAccount() {
    console.log("code: ", this.code);
    this.authSrvc.activateAccount(this.code).subscribe((response) => {
      console.log("AccountActivationPage -> activateAccount -> response", response)
    });
  }
}
