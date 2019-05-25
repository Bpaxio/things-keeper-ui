import { AuthRequest } from './../../api/service/model/authRequest';
import { AuthResponse } from './../../api/service/model/authResponse';
import { AuthControllerService } from './../../api/service/api/authController.service';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  username: string;

  constructor(
      private tokenService: TokenService,
      private authService: AuthControllerService
      ) { }

  get isAuthenticated(): Observable<boolean> {
    // get the token
    const token = this.tokenService.get();
    this.loggedIn.next(Boolean(token));
    return this.loggedIn.asObservable();
  }

  logout(): void {
    this.username = null;
    this.tokenService.clear();
    this.loggedIn.next(false);
  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.authService
      .loginUsingPOST({username, password} as AuthRequest)
      .pipe(
        tap(response => this.tokenService.setAndPublish(response.token)),
        tap(() => this.loggedIn.next(true)),
        tap(response => this.username = response.username)
      );
  }

  register(username: string, password: string): Observable<AuthResponse> {
    return this.authService
      .registerUsingPOST({username, password} as AuthRequest)
      .pipe(
        tap(response => this.tokenService.setAndPublish(response.token)),
        tap(() => this.loggedIn.next(true)),
        tap(response => this.username = response.username)
      );
  }

}
