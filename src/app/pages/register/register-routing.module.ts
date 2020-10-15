import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterPage } from "./register.page";

const routes: Routes = [
  {
    path: "",
    redirectTo: "patient",
    pathMatch: "full",
  },
  {
    path: "",
    component: RegisterPage,
    children: [
      {
        path: "patient",
        loadChildren: () =>
          import("./patient/patient.module").then((m) => m.PatientPageModule),
      },
      {
        path: "praticien",
        loadChildren: () =>
          import("./praticien/praticien.module").then(
            (m) => m.PraticienPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
