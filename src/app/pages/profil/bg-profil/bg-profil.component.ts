import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-profil',
  templateUrl: './bg-profil.component.html',
  styleUrls: ['./bg-profil.component.scss']
})
export class BgProfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  linkNotifications= "notifications"
  linkContact = "contact"
}
