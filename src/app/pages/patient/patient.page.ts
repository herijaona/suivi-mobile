import { Component, OnInit } from "@angular/core";
import { MenuController, Platform } from "@ionic/angular";
import { Router, RouterEvent } from "@angular/router";

@Component({
  selector: "app-patient",
  templateUrl: "./patient.page.html",
  styleUrls: ["./patient.page.scss"],
})
export class PatientPage implements OnInit {
  pages = [
    {
      title: "Callendrier de vaccination",
      url: "/patient/vaccination",
    },
    {
      title: "Rendez-vous",
      url: "/patient/rendez-vous",
      subPages: [
        {
          title: "Nouveau",
          url: "/patient/rendez-vous/nouveau",
        },
        {
          title: "En attente",
          url: "",
        },
        {
          title: "Valider",
          url: "",
        },
        {
          title: "Rejeter",
          url: "",
        },
        {
          title: "Proposition",
          url: "",
        },
      ],
    },
    {
      title: "Intervention",
      url: "/patient/intervention",
    },
    {
      title: "Famille",
      url: "/patient/famille",
    },
  ];
  selectedPath = "";
  constructor(
    public menuCtrl: MenuController,
    private router: Router,
    private plt: Platform
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }
  async ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  async openFirst() {
    //setTimeout(()=> this.menuCtrl.toggle("first"), 10);
    this.plt.ready().then(() => {
      this.menuCtrl.get("first").then((element) => {
        if (element.isActive) {
          setTimeout(() => element.toggle(), 10);
        }
        console.log(
          "PatientPage -> openFirst -> element.offsetWidth",
          element.offsetWidth
        );
      });
    });
  }
}
