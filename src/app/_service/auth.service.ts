import { AuthRequest } from './../../api/service/model/authRequest';
import { AuthResponse } from './../../api/service/model/authResponse';
import { AuthControllerService } from './../../api/service/api/authController.service';

import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, EMPTY, forkJoin, iif, Observable, of, timer} from 'rxjs';
import {map, switchMap, tap, throttle} from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

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
    this.tokenService.clear();
    this.loggedIn.next(false);
  }

  login(login: string, password: string): Observable<AuthResponse> {
    return this.authService
      .loginUsingPOST({login, password} as AuthRequest)
      .pipe(
        tap(response => this.tokenService.setAndPublish(response.token)),
        tap(() => this.loggedIn.next(true))
      );
  }
}
