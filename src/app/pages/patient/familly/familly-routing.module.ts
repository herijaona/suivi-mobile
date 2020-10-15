import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamillyPage } from './familly.page';

const routes: Routes = [
  {
    path: '',
    component: FamillyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamillyPageRoutingModule {}
