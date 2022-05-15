import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../Models/Interface/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      //  'Authrization':'my-auth-token'
    }),
  };
  constructor(private http: HttpClient) {}

  loginUser(user: User): Observable<any> {
    return this.http.post(
      `${environment.apiTestUrl}user/AuthenticateUser`,
      user,
      this.httpOptions
    );
  }
}
