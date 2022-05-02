import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-kine',
  templateUrl: './contact-kine.component.html',
  styleUrls: ['./contact-kine.component.scss']
})
export class ContactKineComponent implements OnInit {

  contactKine!: FormGroup;
  logo!:string;


  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.contactKine= this.formBuilder.group({
      nom:[null, Validators.required],
      prenom:[null, Validators.required],
      objet:[null, Validators.required],
      message: [null, Validators.required],    
    });
    this.logo = "../assets/img/logologin.png";

    }
    onSubmitContact(){
      this.router.navigateByUrl("/contact")
    }

}
