import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccinationPageRoutingModule } from './vaccination-routing.module';

import { VaccinationPage } from './vaccination.page';
import { InterventionComponent } from './intervention/intervention.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    VaccinationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [VaccinationPage, InterventionComponent]
})
export class VaccinationPageModule { }
