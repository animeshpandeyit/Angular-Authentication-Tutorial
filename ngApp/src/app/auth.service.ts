import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/api/register';

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(user: any) {
    return this.http.post(this._registerUrl, user);
  }
}
