import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
