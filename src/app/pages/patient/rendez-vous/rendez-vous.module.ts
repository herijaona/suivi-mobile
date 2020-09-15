import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RendezVousPageRoutingModule } from "./rendez-vous-routing.module";

import { RendezVousPage } from "./rendez-vous.page";
import { RendrezVousFilterComponent } from "./rendrez-vous-filter/rendrez-vous-filter.component";
import { NewRdvComponent } from "./new-rdv/new-rdv.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RendezVousPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RendezVousPage, RendrezVousFilterComponent, NewRdvComponent],
})
export class RendezVousPageModule {}
