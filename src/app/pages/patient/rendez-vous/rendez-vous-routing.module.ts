import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RendezVousPage } from "./rendez-vous.page";

const routes: Routes = [
  {
    path: "",
    redirectTo: "nouveau",
  },
  {
    path: "nouveau",
    loadChildren: () =>
      import("./nouveau/nouveau.module").then((m) => m.NouveauPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RendezVousPageRoutingModule {}
