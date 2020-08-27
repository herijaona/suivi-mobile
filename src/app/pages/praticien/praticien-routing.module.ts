import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PraticienPage } from './praticien.page';

const routes: Routes = [
  {
    path: '',
    component: PraticienPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PraticienPageRoutingModule {}
