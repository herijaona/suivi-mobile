import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PatientPage } from "./patient.page";

const routes: Routes = [
  {
    path: "",
    redirectTo: "rendez-vous",
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
    ],
  },
  /* {
    path: "",
    redirectTo: "",
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientPageRoutingModule {}
