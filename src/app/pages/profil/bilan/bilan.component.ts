import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.scss']
})
export class BilanComponent implements OnInit {
  selected: Date | null;
  
  constructor() {
    this.selected = new Date
   }
  
  ngOnInit(): void {
  }
  
}
