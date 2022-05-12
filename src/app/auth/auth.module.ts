import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent }
]

@NgModule({
  imports: [
  LoginComponent
  ],

  exports: [
    RouterModule
  ]
})

export class AuthModule {

}

