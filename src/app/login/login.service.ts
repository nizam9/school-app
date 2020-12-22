
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router'
import { AuthService } from '../shared/services/auth.service';
import { config } from '../shared/constants/config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public app_url;
  private config_url = config;
  public _headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('x-access-token', 'Bearer 1234')
  // private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  access_token;

  constructor(
    private _http: HttpClient,
    private router: Router,
    private _authService: AuthService,
  ) { }

  login(data): Observable<any> {
    // const headers = this._headers.append('foo', 'Bar');
    // this._headers.append('x-access-token', 'Bearer ');
    return this._http.post(`${this.config_url.user_api}/login`, data, { headers: this._headers })
  }






}
