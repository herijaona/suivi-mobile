import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssocPatientsPageRoutingModule } from './assoc-patients-routing.module';

import { AssocPatientsPage } from './assoc-patients.page';
import { EmptyPageComponent } from 'src/app/components/empty-page/empty-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssocPatientsPageRoutingModule
  ],
  declarations: [AssocPatientsPage, EmptyPageComponent]
})
export class AssocPatientsPageModule {}
