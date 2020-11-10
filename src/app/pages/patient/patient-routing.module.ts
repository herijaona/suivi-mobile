import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PatientPage } from "./patient.page";

const routes: Routes = [
  {
    path: "",
    redirectTo: "vaccination",
  },
  {
    path: "",
    component: PatientPage,
    children: [
      {
        path: "rendez-vous",
        loadChildren: () =>
          import("./rendez-vous/rendez-vous.module").then(
            (m) => m.RendezVousPageModule
          ),
      },
      {
        path: "vaccination",
        loadChildren: () =>
          import("./vaccination/vaccination.module").then(
            (m) => m.VaccinationPageModule
          ),
      },
      {
        path: "family",
        loadChildren: () =>
          import("./familly/familly.module").then((m) => m.FamillyPageModule),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("./profile/profile.module").then((m) => m.ProfilePageModule),
      },
      {
        path: 'assoc-praticiens',
        loadChildren: () => import('./assoc-praticiens/assoc-praticiens.module').then(m => m.AssocPraticiensPageModule)
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientPageRoutingModule { }
