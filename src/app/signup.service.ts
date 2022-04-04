import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UserModel } from './shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  url = "https://gorest.co.in/public/v2/users/";

  constructor(private http: HttpClient) { }

  // Get all users
  getSignUpData() {
    return this.http.get<UserModel[]>(this.url)
  }
  // Submission of new users 
  signUp(data: any) {
    return this.http.post(this.url, data);
  }

  // Delete user
  deleteSignUp(id: string) {
    return this.http.delete(this.url + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
