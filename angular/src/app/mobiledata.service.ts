import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MobiledataService {
  private apiUrl = 'https://localhost:7065/api/MobileModel';

  constructor(private http: HttpClient) { }

  getMobileData(body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/getmodels`, body);
  }
}
