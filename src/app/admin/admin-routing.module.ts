import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';
import { PatientListeAdminComponent } from './patient-liste-admin/patient-liste-admin.component';
import { PraticienListeAdminComponent } from './praticien-liste-admin/praticien-liste-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: 'patient-liste',
        component: PatientListeAdminComponent,
      },
      {
        path: 'praticien-liste',
        component: PraticienListeAdminComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
