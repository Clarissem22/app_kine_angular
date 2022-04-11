import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class ConfigService {
    constructor(private http: HttpClient) {}

    getData() {
        this.http.get("http://127.0.0.1:8000/getData", {responseType: "json"})
            .subscribe(val => console.log(val)
            )
    }

    postData(): Observable<any>  {
        const headers = {'content-type': 'application/json'}; 
        const fd: any = new FormData();
        fd.append('data', 'Xava est lumineux');

        return this.http.post<any>('http://localhost:8000/getPostData', fd);

    }
}