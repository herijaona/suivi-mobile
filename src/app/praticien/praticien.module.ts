import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PraticienPageRoutingModule } from './praticien-routing.module';

import { PraticienPage } from './praticien.page';
import { HeaderComponent } from '../component/header/header.component';
import { PatientListeComponent } from './patient-liste/patient-liste.component';
import { PatientRendezVousComponent } from './patient-rendez-vous/patient-rendez-vous.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PraticienPageRoutingModule
  ],
  declarations: [PraticienPage, HeaderComponent,PatientListeComponent,PatientRendezVousComponent]
})
export class PraticienPageModule {}
