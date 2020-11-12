import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PraticienPage } from "./praticien.page";
const routes: Routes = [
  {
    path: "",
    component: PraticienPage,
    children: [
      {
        path: "proposition-rdv",
        loadChildren: () =>
          import("./proposition-rdv/proposition-rdv.module").then(
            (m) => m.PropositionRdvPageModule
          ),
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then(
            (m) => m.DashboardPageModule
          ),
      },
      {
        path: "consultation",
        loadChildren: () =>
          import("./consultation/consultation.module").then(
            (m) => m.ConsultationPageModule
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
        path: "intervention",
        loadChildren: () =>
          import("./intervention/intervention.module").then(
            (m) => m.InterventionPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PraticienPageRoutingModule { }
