import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})

export class AuthSErvice {
    private token = "MyFakeToken";


getToken(): string{
    return this.token;
}
}