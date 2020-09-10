import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PropositionRdvPage } from "./proposition-rdv.page";

const routes: Routes = [
  {
    path: "",
    component: PropositionRdvPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropositionRdvPageRoutingModule {}
