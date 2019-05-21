import {catchError} from 'rxjs/operators';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from './../_service/auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      console.log(err);
      if (err.status === 403 || err.status === 401) {
        // auto logout if 401 response returned from api
        this.authService.logout();
        location.reload(true);
      }

      return throwError(err);
    }));
  }
}
