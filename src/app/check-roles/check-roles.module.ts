import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckRolesPageRoutingModule } from './check-roles-routing.module';

import { CheckRolesPage } from './check-roles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckRolesPageRoutingModule
  ],
  declarations: [CheckRolesPage]
})
export class CheckRolesPageModule {}
