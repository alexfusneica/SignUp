import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/models/user.model';
import { SignUpService } from '../signup.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: UserModel[];

  constructor(private signUpService: SignUpService) {
    this.users = new Array<UserModel>();
  }

  ngOnInit(): void {
    this.getSubscrber();
  }

  // Get Sign Up users
  getSubscrber() {
    this.signUpService.getSignUpData().subscribe((res: UserModel[]) => {
      this.users = res;
    })
  }

  // Delete Sign Up user
  deleteSubscriber(row: any) {
    this.signUpService.deleteSignUp(row.id).subscribe(res => {
      this.getSubscrber()
    })
  }
}
