import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { VaccinationPageRoutingModule } from "./vaccination-routing.module";

import { VaccinationPage } from "./vaccination.page";
import { BrowserModule } from "@angular/platform-browser";
import { DetailsComponent } from "./details/details.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinationPageRoutingModule,
  ],
  declarations: [VaccinationPage, DetailsComponent],
})
export class VaccinationPageModule {}
