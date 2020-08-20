import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PraticienPage } from "./praticien.page";
import { PatientListeComponent } from "./patient-liste/patient-liste.component";
import { PatientRendezVousComponent } from "./patient-rendez-vous/patient-rendez-vous.component";
import { PraticienDashboardComponent } from "./praticien-dashboard/praticien-dashboard.component";
import { PatientPropositionRendezVousComponent } from "./patient-proposition-rendez-vous/patient-proposition-rendez-vous.component";
import { CommonModule } from "@angular/common";
import { VaccinationComponent } from "./vaccination/vaccination.component";

const routes: Routes = [
  {
    path: "",
    component: PraticienPage,
    children: [
      {
        path: "patient-liste",
        component: PatientListeComponent,
      },
      {
        path: "patient-rendez-vous",
        component: PatientRendezVousComponent,
      },
      {
        path: "patient-rendez-vous/proposition",
        component: PatientPropositionRendezVousComponent,
      },
      {
        path: "vaccination",
        component: VaccinationComponent,
      },
      {
        path: "praticien-dashboard",
        component: PraticienDashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PraticienPageRoutingModule {}
