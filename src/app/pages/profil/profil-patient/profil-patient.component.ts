import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-patient',
  templateUrl: './profil-patient.component.html',
  styleUrls: ['./profil-patient.component.scss']
})
export class ProfilPatientComponent implements OnInit {
  date = new Date()
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  
}
