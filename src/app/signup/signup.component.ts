import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../shared/models/user.model';
import { SignUpService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users: UserModel[];

  public signUpForm !: FormGroup;
  public signUpObj = new UserModel();

  constructor(private router: Router, private fb: FormBuilder, private signUpService: SignUpService, private toastr: ToastrService) {
    this.users = new Array<UserModel>();
  }

  ngOnInit(): void {

    // Form Validator
    this.signUpForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      gender: ["", Validators.required],
      status: ["", Validators.required]
    })
  }

  // Sign Up submit function to save user data from form
  signUp() {
    this.signUpObj.name = this.signUpForm.value.name;
    this.signUpObj.email = this.signUpForm.value.email;
    this.signUpObj.gender = this.signUpForm.value.gender;
    this.signUpObj.status = this.signUpForm.value.status;

    this.signUpService.signUp(this.signUpObj).subscribe({
      next: () => { this.router.navigate(['success']) },
      error: () => { this.toastr.warning("Failed to Subscribe"); },
      complete: () => { this.toastr.success("Subscribe aproved"); },
    });
  }
}
