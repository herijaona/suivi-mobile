import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamillyPageRoutingModule } from './familly-routing.module';

import { FamillyPage } from './familly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamillyPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FamillyPage]
})
export class FamillyPageModule { }
