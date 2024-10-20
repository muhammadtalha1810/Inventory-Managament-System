import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7065/auth';
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {  password: password , username: username};
    return this.http.post(`${this.apiUrl}/login`, body, { withCredentials: true, headers });
  }

  getisLoggedIn():Observable<any>{
    return this.http.get(`${this.apiUrl}/isLoggedIn`,{ withCredentials: true });
  }


  getusertype():Observable<any>{
    return this.http.get(`${this.apiUrl}/getusertype`,{ withCredentials: true });
  }

  logout():Observable<any>{
    return this.http.post(`${this.apiUrl}/logout`, { withCredentials: true });
  }
  // logout() {
  //   document.cookie = ".AspNetCore.Cookies=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  // }
}