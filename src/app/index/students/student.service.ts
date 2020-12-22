import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/shared/services/auth.service';
import { config } from '../../shared/constants/config';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public app_url;
  private config_url = config;
  private token = localStorage.getItem('token');

  public _headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('x-access-token', `Bearer ${this.token}`)
  constructor(
    private _http: HttpClient,
    private router: Router,
    private _authService: AuthService,
  ) {

  }

  registerStudent(data): Observable<any> {
    return this._http.post(`${this.config_url.student_api}/register`, data, { headers: this._headers })
  }
  addStudentFee(data): Observable<any> {
    return this._http.post(`${this.config_url.student_api}/add/fees`, data, { headers: this._headers })
  }

  getStudentsList(limit): Observable<any> {
    return this._http.get(`${this.config_url.student_api}/get/${limit}`, { headers: this._headers })
  }

  getFeeDetails(id): Observable<any> {
    return this._http.get(`${this.config_url.student_api}/get/fees/${id}`, { headers: this._headers })
  }

  updateFeesDetails(fee_id, data): Observable<any> {
    return this._http.put(`${this.config_url.student_api}/update/fees/${fee_id}`, data, { headers: this._headers })
  }
}
