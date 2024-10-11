import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'https://localhost:7065/api/Images';

  constructor(private http: HttpClient) { }

  getImage(modelid: number): Observable<any>  {
    return this.http.get(`${this.apiUrl}/getimage/${modelid}`);
  }

  uploadImage(image: File, modelName: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', image);
    return this.http.post(`${this.apiUrl}/upload?modelName=${modelName}`, formData, { headers: new HttpHeaders({
      'enctype': 'multipart/form-data',  // Ensure multipart form-data
    }) });
  }
}
