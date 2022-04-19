import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-profil',
  templateUrl: './bg-profil.component.html',
  styleUrls: ['./bg-profil.component.scss']
})
export class BgProfilComponent implements OnInit {
  constructor() { }
  title!:string;
  notification!:string;
  don!:string;

  ngOnInit(): void {
    this.title = "Profil";
    this.notification="/assets/img/bell.png";
    this.don="/assets/img/donations.png";
  }

  linkNotifications= "notifications"
  linkContact = "contact"
}
