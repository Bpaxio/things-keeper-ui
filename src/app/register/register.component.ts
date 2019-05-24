import { PasswordValidation } from './../_service/validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { RepeatPasswordEStateMatcher } from '../_service/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginError: string;
  passwordsMatcher = new RepeatPasswordEStateMatcher;
  readonly form = new FormGroup(
    {
      'login': new FormControl(undefined, Validators.required),
      'password': new FormControl(undefined, PasswordValidation),
      'passwordConfirm': new FormControl(undefined, Validators.required)
    },
    control => {
      if(control.get('password').value !== control.get('passwordConfirm').value) {
        return {"nonMatch": true}
      }
    }
  );

  constructor(
    private authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    this.authService
      .register(
        this.form.get('login').value,
        this.form.get('password').value
      )
      .subscribe(
        response => this.router.navigate(['']),
        (error: HttpErrorResponse) => {
          this.loginError = error.message;
        }

      );
  }

  clearErrorMsg() {
    if (this.loginError) {
      this.loginError = undefined;
    }
  }

}
