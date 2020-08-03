import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClient,HttpClientModule, HTTP_INTERCEPTORS, HttpHandler }    from '@angular/common/http';
import { JwtInterceptor } from './helper/jwt.interceptor';
import { AuthService } from './service/auth.service';
import { Api } from './service/api';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';

import { ProfileService } from './service/profile/profile.service';
import { AgendaComponent } from './component/agenda/agenda.component';

import { NgCalendarModule  } from 'ionic2-calendar';
import { UtilsService } from './service/utils/utils.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AgendaComponent
  ],
  entryComponents: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AgendaComponent
  ],
  imports: [
    NgCalendarModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UtilsService,
    ProfileService,
    Api,
    AuthService,
    StatusBar,
    SplashScreen,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: JwtInterceptor,
      multi: true 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
