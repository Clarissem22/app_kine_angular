import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis-exercices',
  templateUrl: './avis-exercices.component.html',
  styleUrls: ['./avis-exercices.component.scss']
})
export class AvisExercicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  exos:any = [
    {
      id : "1",
      image : "planche1.jpg",
      nom: "planche",
      description: "Faire la planche",
      duree : "5",
      repetition : "5",
      experience : "10"
  },
  {
      id : "2",
      image : "ours1.jpg",
      nom: "ours",
      description : "Faire l'ours",
      duree : "5",
      repetition : "5",
      experience : "20"
  },

  {
      id : "3",
      image : "grenouille1.jpg",
      nom: "grenouille",
      description : "Faire la grenouille",
      duree : "5",
      repetition : "5",
      experience : "10"
  },

  {
      id: "4",
      image : "rampe1.jpg",
      nom: "rampe",
      description : "Faire la planche",
      duree : "5",
      repetition : "5",
      experience : "10"
  },

  {
    id : "5",
    image : "retournement1.jpg",
    nom: "retournements",
    description : "Faire la retournement",
    duree : "5",
    repetition : "5",
    experience : "10"
},

{
    id : "6",
    image : "4pattes1.jpg",
    nom: "4 pattes",
    description : "Faire la patte",
    duree : "5",
    repetition : "5",
    experience : "10"
},

{
    id : "7",
    image : "transfertàsyrene1.jpg",
    nom: "transfert à sirène",
    description : "Faire la sirène",
    duree : "5",
    repetition : "5",
    experience : "10"
},

{
    id : "8",
    image : "escalier1.jpg",
    nom: "esclalier",
    description : "Faire l'escalier",
    duree : "5",
    repetition : "5",
    experience : "10"
}
  ]
}
