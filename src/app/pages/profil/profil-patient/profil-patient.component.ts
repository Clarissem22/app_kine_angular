import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-patient',
  templateUrl: './profil-patient.component.html',
  styleUrls: ['./profil-patient.component.scss']
})
export class ProfilPatientComponent implements OnInit {
  
  constructor() { }
  nom!:string;
  prenom!:string;
  naissance!:string;
  kine!:string;
  humeur!:string;
  photo!:string;

 ngOnInit(): void {
   this.nom ="Charles";
   this.prenom="Bouveret"
   this.naissance = "28 Novembre 1995";
   this.kine = "Marin Poloni";
   this.humeur = "/assets/img/smiley.png";
   this.photo = "assets/img/photoProfil.png";
 }
}
