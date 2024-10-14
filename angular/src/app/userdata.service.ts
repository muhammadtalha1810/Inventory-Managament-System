import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private apiUrl = 'https://localhost:7065/api/user';

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any> {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${this.apiUrl}/getdetails`, { withCredentials: true , headers: header});
  }

  register(userdata:object):Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, userdata)
  }
}
