import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/signin';

const httpOptions = {
  headers: new HttpHeaders({ "Access-Control-Allow-Origin": "http://localhost:8080",

  'Access-Control-Allow-Headers': 'application/json'
})

};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,public userService: UserService, private _router: Router) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API , {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
  loggedIn() {
    return !!localStorage.getItem('accessToken')
  }


}
