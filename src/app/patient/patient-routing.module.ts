import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../auth/auth-guard.service';
import { PatientPage } from './patient.page';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { MonRendezVousComponent } from './mon-rendez-vous/mon-rendez-vous.component';
import { RdvValidationComponent } from './mon-rendez-vous/rdv-validation/rdv-validation.component';
import { MonCarnetVaccinationComponent } from './mon-carnet-vaccination/mon-carnet-vaccination.component';
import { DetailsComponent } from './mon-carnet-vaccination/details/details.component';
import { MonGroupeFamilleComponent } from './mon-groupe-famille/mon-groupe-famille.component';
import { ListeGroupFamilleComponent } from './mon-groupe-famille/liste-group-famille/liste-group-famille.component';
import { DetailGroupFamilleComponent } from './mon-groupe-famille/detail-group-famille/detail-group-famille.component';

const routes: Routes = [
  {
    path: '',
    component: PatientPage,
    children: [
      {
        path: 'patient-dashboard',
        component: PatientDashboardComponent,
      },
      {
        path: 'carnet-vaccination',
        component: MonCarnetVaccinationComponent,
        children: [
          {
            path: ':id',
            component: MonCarnetVaccinationComponent,
          },
          {
            path: 'detail/:id',
            component: DetailsComponent,
          },
        ]
      },
      {
        path: 'patient-rendez-vous',
        component: MonRendezVousComponent,
        children: [
          {
            path: 'validation',
            component: RdvValidationComponent,
          },
          { path: '', redirectTo:'overview', pathMatch:"full" }
        ]
      },
      {
        path: 'groupe-famille',
        component: MonGroupeFamilleComponent,
        children: [
          {
            path: '',
            component: ListeGroupFamilleComponent,
          },
          {
            path: 'detail-groupe-famille/:id',
            component: DetailGroupFamilleComponent,
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientPageRoutingModule {}
