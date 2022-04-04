import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../shared/models/user.model';
import { SignUpService } from '../signup.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: UserModel[];

  constructor(private router: Router, private signUpService: SignUpService, private toastr: ToastrService) {
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
    this.signUpService.deleteSignUp(row.id).subscribe(
      (response) => {
        this.getSubscrber();
        this.toastr.success("User Deleted Successfully");
      }, (error) => {
        this.toastr.warning("Failed to Delete");
        throw error;
      })
  }

  // Navigate to Sign Up
  backToSignUp() {
    this.router.navigate(['signup'])
  }
}
