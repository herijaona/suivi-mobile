import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../auth/auth-guard.service';
import { PatientPage } from './patient.page';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { MonRendezVousComponent } from './mon-rendez-vous/mon-rendez-vous.component';
import { RdvValidationComponent } from './mon-rendez-vous/rdv-validation/rdv-validation.component';
import { RdvAnnulationComponent } from './mon-rendez-vous/rdv-annulation/rdv-annulation.component';
import { RdvPropositionComponent } from './mon-rendez-vous/rdv-proposition/rdv-proposition.component';
import { MonCarnetVaccinationComponent } from './mon-carnet-vaccination/mon-carnet-vaccination.component';
import { DetailsComponent } from './mon-carnet-vaccination/details/details.component';
import { MonGroupeFamilleComponent } from './mon-groupe-famille/mon-groupe-famille.component';
import { ListeGroupFamilleComponent } from './mon-groupe-famille/liste-group-famille/liste-group-famille.component';
import { DetailGroupFamilleComponent } from './mon-groupe-famille/detail-group-famille/detail-group-famille.component';
import { MonConsultationComponent } from './mon-consultation/mon-consultation.component';

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
        path: 'consultation',
        component: MonConsultationComponent,
        children: [
          {
            path: 'detail/:id',
            component: DetailsComponent,
          },
        ]
      },
      {
        path: 'patient-rendez-vous',
        component: MonRendezVousComponent,
      },
      {
        path: 'patient-rendez-vous/validation',
        component: RdvValidationComponent,
      },
      {
        path: 'patient-rendez-vous/proposition',
        component: RdvPropositionComponent,
      },
      {
        path: 'patient-rendez-vous/annule',
        component: RdvAnnulationComponent,
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
