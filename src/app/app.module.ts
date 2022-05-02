import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timegridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import scrollgridPlugin from '@fullcalendar/scrollgrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgrammeComponent } from './pages/programme/programme.component';
import { ExercicesComponent } from './pages/exercices/exercices.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { DonComponent } from './pages/don/don.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundComponent } from './pages/components/background/background.component';
import { ProgrammejourComponent } from './pages/programme/programmejour/programmejour.component';
import { HttpClientModule } from '@angular/common/http';
import { BgProgrammeComponent } from './pages/programme/bg-programme/bg-programme.component';
import { BgHomeComponent } from './pages/home/bg-home/bg-home.component';
import { ChangerProgrammeComponent } from './pages/programme/changer-programme/changer-programme.component';
import { AvisExercicesComponent } from './pages/programme/avis-exercices/avis-exercices.component';
import { BgExercicesComponent } from './pages/exercices/bg-exercices/bg-exercices.component';
import { ListeExercicesComponent } from './pages/exercices/liste-exercices/liste-exercices.component';
import { TriComponent } from './pages/exercices/tri/tri.component';
import { BgProfilComponent } from './pages/profil/bg-profil/bg-profil.component';
import { ProfilPatientComponent } from './pages/profil/profil-patient/profil-patient.component';
import { BilanComponent } from './pages/profil/bilan/bilan.component';
import { HelloComponent } from './pages/home/hello/hello.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarrousselComponent } from './pages/components/carroussel/carroussel.component';
import { BgContactComponent } from './pages/contact/bg-contact/bg-contact.component';
import { CdkAccordionComponent } from './pages/components/cdk-accordion/cdk-accordion.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { httpInterceptorProviders } from './interceptors/index';
import { ContactKineComponent } from './pages/components/contact-kine/contact-kine.component';
import { LoginComponent } from './auth/components/login/login.component';




FullCalendarModule.registerPlugins([ // register FullCalendar plugins

  dayGridPlugin,
  timegridPlugin,
  interactionPlugin,
  scrollgridPlugin,
  googleCalendarPlugin,
]);


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
    AvisExercicesComponent,
    BgExercicesComponent,
    ListeExercicesComponent,
    TriComponent,
    BgProfilComponent,
    ProfilPatientComponent,
    HelloComponent,
    BilanComponent,
    CarrousselComponent,
    BgContactComponent,
    CdkAccordionComponent,
    ContactKineComponent,
    ProgressBarComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FullCalendarModule,
    NgImageSliderModule,
    CdkAccordionModule,
    ReactiveFormsModule,




  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
