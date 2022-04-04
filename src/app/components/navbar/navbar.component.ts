import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  linkAccueil = "home"
  linkProgtamme = "programme"
  linkExercices = "exercices"
  linkProfil = "profil"
  linkContact = "contact"
  linkParametres = "parametres"
  linkLogin = "login"
}
