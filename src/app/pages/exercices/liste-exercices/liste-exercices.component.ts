import { Component, Input, OnInit } from '@angular/core';
import { Exercice } from '../../../models/exercices.model';

@Component({
  selector: 'app-liste-exercices',
  templateUrl: './liste-exercices.component.html',
  styleUrls: ['./liste-exercices.component.scss']
})
export class ListeExercicesComponent implements OnInit {
@Input() exercice!:Exercice;
exercices: Exercice[] = [
  {
    id : 1,
    image : "planche1.jpg",
    nom: "Planche",
    description: "Faire la planche",
    duree : 5,
    repetition : 5,
    experience : 10
},
{
    id : 2,
    image : "ours1.jpg",
    nom: "Ours",
    description : "Faire l'ours",
    duree : 5,
    repetition : 5,
    experience : 20
},

{
    id : 3,
    image : "grenouille1.jpg",
    nom: "Grenouille",
    description : "Faire la grenouille",
    duree : 5,
    repetition : 5,
    experience : 10
},

{
    id: 4,
    image : "rampe1.jpg",
    nom: "Rampe",
    description : "Faire la planche",
    duree : 5,
    repetition : 5,
    experience : 10
},
{
  id : 5,
  image : "retournement1.jpg",
  nom: "Retournements",
  description : "Faire la retournement",
  duree : 5,
  repetition : 5,
  experience : 10
},

{
  id : 6,
  image : "4pattes1.jpg",
  nom: "4 pattes",
  description : "Faire la patte",
  duree : 5,
  repetition : 5,
  experience : 10
},

{
  id : 7,
  image : "transfertàsyrene1.jpg",
  nom: "Transfert à sirène",
  description : "Faire la sirène",
  duree : 5,
  repetition : 5,
  experience : 10
},

{
  id : 8,
  image : "escalier1.jpg",
  nom: "Esclalier",
  description : "Faire l'escalier",
  duree : 5,
  repetition : 5,
  experience : 10
}
]

  constructor() { }

  ngOnInit() {
    this
  }

}
