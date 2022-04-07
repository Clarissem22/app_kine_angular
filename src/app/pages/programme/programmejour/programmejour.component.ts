import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programmejour',
  templateUrl: './programmejour.component.html',
  styleUrls: ['./programmejour.component.scss']
})
export class ProgrammejourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// async function dataExercices(){
//   const response = await fetch("/datas/exercices.json");
//   const data = await response.json();
//   return data;
// }

// dataExercices().then((resultat) => {
// resultat.forEach((element) => {
//   const div = document.createElement("div");
//   div

// });
// });
