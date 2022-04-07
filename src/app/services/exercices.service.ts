import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExercicesService {

  constructor(private http: HttpClient) { }

  getExercices(){
    return this.http.get("../../../datas/exercices.json");
  }
}
