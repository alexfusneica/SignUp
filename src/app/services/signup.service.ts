import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UserModel } from '../shared/models/user.model';

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
    return this.http.post<UserModel[]>(this.url, data)

  }

  // Delete user
  deleteSignUp(id: number) {
    return this.http.delete<UserModel[]>(this.url + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // Update User
  updateSignUp(data: any, id: number) {
    return this.http.put<UserModel[]>(this.url + id, data)
      .pipe(map((res: any) => {
        return res
      }))
  }
}
