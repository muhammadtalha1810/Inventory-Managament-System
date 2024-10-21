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

  getUserDataById(userid:number|null): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userid}`, { withCredentials: true });
  }

  register(userdata:object):Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, userdata)
  }

  getUsersList(PageNumber:number = 1, PageSize:number = 25):Observable<any>
  {
    return this.http.get(`${this.apiUrl}/getuserslist?PageNumber=${PageNumber}&PageSize=${PageSize}`, { withCredentials: true})
  }

  updateUser(userdata:object):Observable<any>
  {
    return this.http.put(this.apiUrl, userdata, { withCredentials: true})
  }

  deleteUser(userid:number)
  {
    return this.http.delete(`${this.apiUrl}/${userid}`, { withCredentials: true });
  }

  getRequests(PageNumber:number = 1, PageSize:number = 25, RequestStatus:string = 'pending'):Observable<any>
  {
    return this.http.get(`${this.apiUrl}/getrequests?PageNumber=${PageNumber}&PageSize=${PageSize}&RequestStatus=${RequestStatus}`, { withCredentials: true})
  }

  addRequest(body:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/addrequests`, body, { withCredentials: true});
  }

  approveRequest(requestid:number)
  {
    return this.http.get(`${this.apiUrl}/approverequest?RequestId=${requestid}`,  { withCredentials: true });
  }

  declineRequest(requestid:number)
  {
    return this.http.get(`${this.apiUrl}/declinerequest?RequestId=${requestid}`,  { withCredentials: true });
  }
  
}
