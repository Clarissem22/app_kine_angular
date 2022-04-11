import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgrammeComponent } from './pages/programme/programme.component';
import { ExercicesComponent } from './pages/exercices/exercices.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { LoginComponent } from './pages/login/login.component';
import { DonComponent } from './pages/don/don.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundComponent } from './components/background/background.component';
import { ProgrammejourComponent } from './pages/programme/programmejour/programmejour.component';
import { HttpClientModule } from '@angular/common/http';
import { BgProgrammeComponent } from './pages/programme/bg-programme/bg-programme.component';
import { BgHomeComponent } from './pages/home/bg-home/bg-home.component';
import { ChangerProgrammeComponent } from './pages/programme/changer-programme/changer-programme.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgrammeComponent,
    ExercicesComponent,
    ProfilComponent,
    ContactComponent,
    ParametresComponent,
    LoginComponent,
    DonComponent,
    NotificationsComponent,
    InscriptionComponent,
    NavbarComponent,
    BackgroundComponent,
    ProgrammejourComponent,
    BgProgrammeComponent,
    BgHomeComponent,
    ChangerProgrammeComponent,

   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
