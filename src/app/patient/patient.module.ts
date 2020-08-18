import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientPageRoutingModule } from './patient-routing.module';

import { PatientPage } from './patient.page';
import { HeaderComponent } from '../component/header/header.component';
import { MonRendezVousComponent } from './mon-rendez-vous/mon-rendez-vous.component';
import { RdvValidationComponent } from './mon-rendez-vous/rdv-validation/rdv-validation.component';
import { MonCarnetVaccinationComponent } from './mon-carnet-vaccination/mon-carnet-vaccination.component';
import { DetailsComponent } from './mon-carnet-vaccination/details/details.component';
import { MonGroupeFamilleComponent } from './mon-groupe-famille/mon-groupe-famille.component';
import { ListeGroupFamilleComponent } from './mon-groupe-famille/liste-group-famille/liste-group-famille.component';
import { DetailGroupFamilleComponent } from './mon-groupe-famille/detail-group-famille/detail-group-famille.component';
import { MonConsultationComponent } from './mon-consultation/mon-consultation.component';
import { RdvPropositionComponent } from './mon-rendez-vous/rdv-proposition/rdv-proposition.component';
import { RdvAnnulationComponent } from './mon-rendez-vous/rdv-annulation/rdv-annulation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientPageRoutingModule
  ],
  declarations: [
    PatientPage,
    HeaderComponent,
    MonRendezVousComponent,
    RdvValidationComponent,
    MonCarnetVaccinationComponent,
    DetailsComponent,
    MonGroupeFamilleComponent,
    ListeGroupFamilleComponent,
    DetailGroupFamilleComponent,
    MonConsultationComponent,
    RdvPropositionComponent, 
    RdvAnnulationComponent
  ]
})
export class PatientPageModule {}
