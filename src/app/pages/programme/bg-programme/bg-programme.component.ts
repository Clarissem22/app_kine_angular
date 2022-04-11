import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-programme',
  templateUrl: './bg-programme.component.html',
  styleUrls: ['./bg-programme.component.scss']
})
export class BgProgrammeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  linkNotifications= "notifications"
  linkContact = "contact"
}
