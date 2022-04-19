import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logo!:string;

  constructor() { }

  ngOnInit(): void {
    this.logo = "../assets/img/logologin.png";

  }

}
