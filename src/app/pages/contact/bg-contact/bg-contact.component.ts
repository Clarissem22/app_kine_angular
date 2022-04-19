import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-contact',
  templateUrl: './bg-contact.component.html',
  styleUrls: ['./bg-contact.component.scss']
})
export class BgContactComponent implements OnInit {
  linkNotifications= "notifications"
  linkContact = "contact"
  constructor() { }

  ngOnInit(): void {
  }

}
