import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../shared/models/user.model';
import { SignUpService } from '../services/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: UserModel[];
  signUpObj = new UserModel();
  formValue !: FormGroup;
  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private router: Router, private signUpService: SignUpService, private toastr: ToastrService, private fb: FormBuilder) {
    this.users = new Array<UserModel>();
  }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      gender: ["", Validators.required],
      status: ["", Validators.required]
    })
    this.getUser();
  }

  // Get Sign Up users
  getUser() {
    this.signUpService.getSignUpData().subscribe((res: UserModel[]) => {
      this.users = res;
    })
  }

  // Delete Sign Up user
  deleteUser(row: any) {
    this.signUpService.deleteSignUp(row.id).subscribe({
      next: () => { this.getUser() },
      error: () => { this.toastr.warning("Failed to Delete"); },
      complete: () => { this.toastr.success("User was deleted") },
    })
  }

  // Edit user
  editUserDetail(row: any) {
    this.signUpObj.id = this.formValue.value.id
    this.signUpObj.name = this.formValue.value.name;
    this.signUpObj.email = this.formValue.value.email;
    this.signUpObj.gender = this.formValue.value.gender;
    this.signUpObj.status = this.formValue.value.status;
    this.signUpService.updateSignUp(this.signUpObj, row.id).subscribe({

      next: () => { console.log(this.signUpObj), this.toastr.success("User was edited") },
      error: () => { this.toastr.warning("Failed to Edit") },
      complete: () => {
        let ref = document.getElementById('close');
        ref?.click();
        this.getUser()
      },
    })
  }

  // Get data into modal
  onEdit(row: any) {
    this.signUpObj.id = row.id;
    this.formValue.controls["name"].setValue(row.name);
    this.formValue.controls["email"].setValue(row.email);
    this.formValue.controls["gender"].setValue(row.gender);
    this.formValue.controls["status"].setValue(row.status);
    this.showUpdate = true;
    this.showAdd = false;
  }

  // Navigate to Sign Up
  backToSignUp() {
    this.router.navigate(['signup'])
  }

}

