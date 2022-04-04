import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  url = "https://gorest.co.in/public/v2/users/";

  constructor(private http: HttpClient) { }

  // Get all users
  getSignUpData() {
    return this.http.get(this.url)
  }

}
