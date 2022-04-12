import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-exercices',
  templateUrl: './bg-exercices.component.html',
  styleUrls: ['./bg-exercices.component.scss']
})
export class BgExercicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  linkNotifications= "notifications"
  linkContact = "contact"
}
