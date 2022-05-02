import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProgrammeComponent } from './pages/programme/programme.component';
import { ExercicesComponent } from './pages/exercices/exercices.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { DonComponent } from './pages/don/don.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ContactKineComponent } from './pages/components/contact-kine/contact-kine.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  {path: "home", component: HomeComponent },
  {path: "programme", component: ProgrammeComponent },
  {path: "exercices", component: ExercicesComponent },
  {path: "profil", component: ProfilComponent },
  {path: "contact", component: ContactComponent },
  {path: "parametres", component: ParametresComponent },
  {path: "", component: LoginComponent },
  {path: "don", component: DonComponent },
  {path: "notifications", component: NotificationsComponent },
  {path: "inscription", component: InscriptionComponent },
  {path: "contactkine", component: ContactKineComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
