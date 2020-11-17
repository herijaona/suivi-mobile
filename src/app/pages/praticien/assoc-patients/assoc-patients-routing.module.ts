import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssocPatientsPage } from './assoc-patients.page';

const routes: Routes = [
  {
    path: '',
    component: AssocPatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssocPatientsPageRoutingModule {}
