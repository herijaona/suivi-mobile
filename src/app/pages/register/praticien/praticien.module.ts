import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PraticienPageRoutingModule } from "./praticien-routing.module";

import { PraticienPage } from "./praticien.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PraticienPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [PraticienPage],
})
export class PraticienPageModule {}
