import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamillyPageRoutingModule } from './familly-routing.module';

import { FamillyPage } from './familly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamillyPageRoutingModule
  ],
  declarations: [FamillyPage]
})
export class FamillyPageModule {}
