import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-programme',
  templateUrl: './bg-programme.component.html',
  styleUrls: ['./bg-programme.component.scss']
})
export class BgProgrammeComponent implements OnInit {
  constructor() { }
  title!:string;
  notification!:string;
  don!:string;

  ngOnInit(): void {
    this.title = "Programme";
    this.notification="/assets/img/bell.png";
    this.don="/assets/img/donations.png";
  }

  linkNotifications= "notifications"
  linkContact = "contact"
}
