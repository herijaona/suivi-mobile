import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PraticienPage } from './praticien.page';
import { PatientListeComponent } from './patient-liste/patient-liste.component';
import { PatientRendezVousComponent } from './patient-rendez-vous/patient-rendez-vous.component';
import { PraticienDashboardComponent } from './praticien-dashboard/praticien-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PraticienPage,
    children: [
      {
        path: 'patient-liste',
        component: PatientListeComponent,
      },
      {
        path: 'patient-rendez-vous',
        component: PatientRendezVousComponent,
      },
      {
        path: 'praticien-dashboard',
        component: PraticienDashboardComponent,
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PraticienPageRoutingModule {}
