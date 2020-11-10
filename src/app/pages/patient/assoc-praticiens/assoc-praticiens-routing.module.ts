import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssocPraticiensPage } from './assoc-praticiens.page';

const routes: Routes = [
  {
    path: '',
    component: AssocPraticiensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssocPraticiensPageRoutingModule {}
