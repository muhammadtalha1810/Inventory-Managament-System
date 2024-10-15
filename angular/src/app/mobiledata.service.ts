import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MobiledataService {
  private apiUrl = 'https://localhost:7065/api/MobileModel';

  constructor(private http: HttpClient) { }

  getMobileData(body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/getmodels`, body);
  }

  getModelsNames(keyword: string, resultsCount: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getmodelsnames?Keyword=${keyword}&ResultsCount=${resultsCount}`);
  }

  getMobileDatabyId(modelId: number|null): Observable<any> {
    if(modelId === null)
    {
      return of(null);
    }
    else {
      return this.http.get(`${this.apiUrl}/mobiledata/${modelId}`);
    }
    
  }
}