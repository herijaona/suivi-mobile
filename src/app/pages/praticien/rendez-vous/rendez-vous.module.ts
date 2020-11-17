import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RendezVousPageRoutingModule } from './rendez-vous-routing.module';

import { RendezVousPage } from './rendez-vous.page';
import { NewRendezVousComponent } from './new-rendez-vous/new-rendez-vous.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RendezVousPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RendezVousPage, NewRendezVousComponent]
})
export class RendezVousPageModule { }
