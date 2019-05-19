import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../_service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginError: string;
  readonly form = new FormGroup(
    {
      'login': new FormControl(undefined),
      'password': new FormControl(undefined)
    }
  );

  constructor(
    private authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService
      .login(
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
