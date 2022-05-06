import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExercicesService {



  constructor(private http: HttpClient) { }



  // getExercicesById(execerciceId: number): Exercice {
  //   const exercice = this.exercices.find(exercice => exercice.id === execerciceId);
  //   return this.exercices;
  // }

}
