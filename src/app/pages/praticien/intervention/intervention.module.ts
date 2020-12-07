import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterventionPageRoutingModule } from './intervention-routing.module';

import { InterventionPage } from './intervention.page';
import { EmptyPageComponent } from 'src/app/components/empty-page/empty-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterventionPageRoutingModule
  ],
  declarations: [InterventionPage, EmptyPageComponent]
})
export class InterventionPageModule {}
