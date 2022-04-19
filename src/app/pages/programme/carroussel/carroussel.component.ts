import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carroussel',
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.scss']
})
export class CarrousselComponent implements OnInit {
  imgCollection: Array<object> = [
    {
      image: './assets/img/exercices/planche2.jpg',
      thumbImage: './assets/img/exercices/planche1.jpg',
      alt: 'Image 1',
      title: 'Planche'
    }, {
      image: './assets/img/exercices/ours2.jpg',
      thumbImage: './assets/img/exercices/ours1.jpg',
      title: 'Ours',
      alt: 'Image 2'
    }, {
      image: './assets/img/exercices/grenouille2.jpg',
      thumbImage: './assets/img/exercices/grenouille1.jpg',
      title: 'Grenouille',
      alt: 'Image 3'
    }, {
      image: './assets/img/exercices/Rampe2.jpg',
      thumbImage: './assets/img/exercices/rampe1.jpg',
      title: 'Rampe',
      alt: 'Image 4'
    }, {
      image: './assets/img/exercices/retournement2.jpg',
      thumbImage: './assets/img/exercices/retournement1.jpg',
      title: 'Retournement',
      alt: 'Image 5'
    }, {
      image: './assets/img/exercices/4pattes2.jpg',
      thumbImage: './assets/img/exercices/4pattes1.jpg',
      title: '4 pattes',
      alt: 'Image 6'
    }, {
      image: './assets/img/exercices/transfertasyrene2.jpg',
      thumbImage: './assets/img/exercices/transfertàsyrene1.jpg',
      title: 'Transfert à sirène',
      alt: 'Image 7'
    }, {
      image: './assets/img/exercices/escalier2.jpg',
      thumbImage: './assets/img/exercices/escalier1.jpg',
      title: 'Escalier',
      alt: 'Image 8'
    }
];


  constructor() { }

  ngOnInit(): void {
  }

}
