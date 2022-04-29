import { Injectable } from "@angular/core";



@Injectable({
  providedIn:'root'
})

export class FormService{

  constructor(){}

  addFormData(formvalue:{nom:string, prenom:string, kine:string, adresse:string}): void{
    return console.log(formvalue);

  }



}
