import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PropositionRdvPageRoutingModule } from "./proposition-rdv-routing.module";

import { PropositionRdvPage } from "./proposition-rdv.page";
import { NewRdvComponent } from "./new-rdv/new-rdv.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    PropositionRdvPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [PropositionRdvPage, NewRdvComponent],
})
export class PropositionRdvPageModule {}
