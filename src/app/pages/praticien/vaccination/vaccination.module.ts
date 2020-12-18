import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { VaccinationPageRoutingModule } from "./vaccination-routing.module";

import { VaccinationPage } from "./vaccination.page";
import { BrowserModule } from "@angular/platform-browser";
import { DetailsComponent } from "./details/details.component";
import { OrganizeComponent } from './organize/organize.component';
import { NewVaccinationComponent } from './new-vaccination/new-vaccination.component';
import { EmptyPageComponent } from "src/app/components/empty-page/empty-page.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [VaccinationPage, DetailsComponent, OrganizeComponent, NewVaccinationComponent, EmptyPageComponent],
})
export class VaccinationPageModule { }
