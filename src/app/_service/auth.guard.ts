import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {AuthService} from './auth.service';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated.pipe(
      map(isLogin => {
        if (isLogin) {
          return true;
        } else {
          this.router.navigate(['/login'], {queryParams: {referrer: state.url}});
          return false;
        }
      }),
      catchError(error => {
        this.router.navigate(['/login'], {queryParams: {referrer: state.url}});
        return throwError(error);
      })
    );
  }
}
