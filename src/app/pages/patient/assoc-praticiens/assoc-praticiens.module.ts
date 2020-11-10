import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssocPraticiensPageRoutingModule } from './assoc-praticiens-routing.module';

import { AssocPraticiensPage } from './assoc-praticiens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssocPraticiensPageRoutingModule
  ],
  declarations: [AssocPraticiensPage]
})
export class AssocPraticiensPageModule {}
