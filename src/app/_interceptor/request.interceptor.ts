import { TokenService } from './../_service/token.service';
import {catchError} from 'rxjs/operators';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      console.log(req);
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.tokenService.get()
        }
      });
      console.log("token is" + "Bearer " + this.tokenService.get());
      console.log(req);
      return next.handle(req);
    }));
  }
}
