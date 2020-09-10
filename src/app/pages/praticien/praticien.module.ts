import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PraticienPageRoutingModule } from "./praticien-routing.module";

import { PraticienPage } from "./praticien.page";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpConfigInterceptorService } from "src/app/services/interceptor/http-config-interceptor";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PraticienPageRoutingModule],
  declarations: [PraticienPage],
})
export class PraticienPageModule {}
