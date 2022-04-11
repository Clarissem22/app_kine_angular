import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class ConfigService {
    constructor(private http: HttpClient) {}

    getData() {
        this.http.get("http://127.0.0.1:8000/getData", {responseType: "json"})
            .subscribe(val => console.log(val)
            )
    }
}