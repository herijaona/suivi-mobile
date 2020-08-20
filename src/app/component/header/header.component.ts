import { Component, OnInit, ElementRef } from "@angular/core";
import { UtilsService } from "../../service/utils/utils.service";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  navigate: { title: string; url: string; icon: string }[];
  ROLE_PRATICIEN: any = "ROLE_PRATICIEN";
  ROLE_PATIENT: any = "ROLE_PATIENT";
  private area: string;
  constructor(
    private elementRef: ElementRef,
    private utils: UtilsService,
    private menu: MenuController
  ) {}

  ngOnInit() {
    this.sideMenu();
  }

  async openCustom(i) {
    if (i == 1) {
      this.elementRef.nativeElement
        .querySelector(".ion-content-menu")
        .classList.add("display-block");
    } else {
      this.elementRef.nativeElement
        .querySelector(".ion-content-menu")
        .classList.remove("display-block");
    }
  }
  async sideMenu() {
    let user = await this.utils.getUserDetails();
    if (user.roles[0] == this.ROLE_PRATICIEN) {
      this.area = "Praticien Area";
      return (this.navigate = [
        {
          title: "Dashboard",
          url: "/praticien/praticien-dashboard",
          icon: "home",
        },
        {
          title: "Chat",
          url: "/praticien/praticien-dashboard",
          icon: "chatboxes",
        },
        {
          title: "Contacts",
          url: "/praticien/praticien-dashboard",
          icon: "contacts",
        },
        {
          title: "Appointment Proposal",
          url: "/praticien/patient-rendez-vous",
          icon: "contacts",
        },
      ]);
    } else if (user.roles[0] == this.ROLE_PATIENT) {
      this.area = "Patient Area";
      return (this.navigate = [
        { title: "Dash", url: "/patient/patient-dashboard", icon: "home" },
        { title: "Chat", url: "/chat", icon: "chatboxes" },
        { title: "Contacts", url: "/contacts", icon: "contacts" },
      ]);
    }
  }
}
