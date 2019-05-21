import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class TokenService {
    private readonly token$ = new ReplaySubject<string>(1);
    readonly key = 'keeper-token';

    constructor() {
        this.token$.next(this.get());
    }

    clear() {
        localStorage.removeItem(this.key);
        this.token$.next('');
    }

    get(): string {
      return localStorage.getItem(this.key);
    }

    set(token: string) {
        localStorage.setItem(this.key, token);
    }

    getAsObservable(): Observable<string> {
        return this.token$.asObservable();
    }

    setAndPublish(token: string) {
      this.set(token);
      this.token$.next(token);
    }
}
