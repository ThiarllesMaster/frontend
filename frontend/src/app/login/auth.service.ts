import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccessToken } from '../account/login/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

   login(login: any): Observable<AccessToken> {
     const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
     const options = {headers : headers}
    return this.http.post<AccessToken>(`${this.baseUrl}`, JSON.stringify(login), options);
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token')
    return token
  }
}
