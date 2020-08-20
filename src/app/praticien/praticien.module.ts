import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PraticienPageRoutingModule } from "./praticien-routing.module";

import { PraticienPage } from "./praticien.page";
import { HeaderComponent } from "../component/header/header.component";
import { PatientListeComponent } from "./patient-liste/patient-liste.component";
import { PatientRendezVousComponent } from "./patient-rendez-vous/patient-rendez-vous.component";
import { PatientPropositionRendezVousComponent } from "./patient-proposition-rendez-vous/patient-proposition-rendez-vous.component";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    PraticienPageRoutingModule,
  ],
  declarations: [
    PraticienPage,
    HeaderComponent,
    PatientListeComponent,
    PatientRendezVousComponent,
    PatientPropositionRendezVousComponent,
  ],
})
export class PraticienPageModule {}
