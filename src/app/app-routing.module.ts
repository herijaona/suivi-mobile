import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AgendaComponent } from './component/agenda/agenda.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient.module').then( m => m.PatientPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'praticien',
    loadChildren: () => import('./praticien/praticien.module').then( m => m.PraticienPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'check-roles',
    loadChildren: () => import('./check-roles/check-roles.module').then( m => m.CheckRolesPageModule),
    canActivate: [AuthGuardService]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
