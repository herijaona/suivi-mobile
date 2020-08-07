import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckRolesPage } from './check-roles.page';

const routes: Routes = [
  {
    path: '',
    component: CheckRolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckRolesPageRoutingModule {}
