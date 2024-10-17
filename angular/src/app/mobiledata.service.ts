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

  getModelsNames(keyword: string|null, resultsCount: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getmodelsnames?Keyword=${keyword}&ResultsCount=${resultsCount}`);
  }
  getVariantNames(keyword: string|null, resultsCount: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getvariantsnames?Keyword=${keyword}&ResultsCount=${resultsCount}`);
  }
  getManufacturerNames(keyword: string|null, resultsCount: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getmanufacturersnames?Keyword=${keyword}&ResultsCount=${resultsCount}`);
  }
  getWarehousesNames(keyword: string|null, resultsCount: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getwarehousesnames?Keyword=${keyword}&ResultsCount=${resultsCount}`);
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

  getBrandList(keyword:string|null, resultcount:number) : Observable<any>
  {
    return this.http.get(`${this.apiUrl}/getbrandnames?Keyword=${keyword}&ResultsCount=${resultcount}`);
  }

  getManufacturerList() : Observable<any>
  {
    return this.http.get(`${this.apiUrl}/brandnames`);
  }

  addManufacturer(body:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/addmanufacturer`, body, { withCredentials: true });
  }
  addVariant(body:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/addvariant`, body, { withCredentials: true });
  }
  addModel(body:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/addmodel`, body, { withCredentials: true });
  }
  addBrand(body:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/addbrand`, body, { withCredentials: true });
  }
  addStock(body:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/addstock`, body, { withCredentials: true });
  }
}