import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ConsultationPageRoutingModule } from "./consultation-routing.module";

import { ConsultationPage } from "./consultation.page";
import { ConsultationFilterComponent } from "./consultation-filter/consultation-filter.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultationPageRoutingModule,
  ],
  declarations: [ConsultationPage, ConsultationFilterComponent],
  entryComponents: [ConsultationFilterComponent],
})
export class ConsultationPageModule {}
