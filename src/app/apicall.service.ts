import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  apiurl = "https://reqres.in/api/";
  constructor(private hc: HttpClient) { }
  postApi(req: any, apiname: string): Observable<any> {
    return this.hc.post<any>(`${this.apiurl}${apiname}`, req)
  }
  getApi(apiname: string): Observable<any> {
    return this.hc.get<any>(`${this.apiurl}${apiname}`)
  }
  putApi(req: any, apiname: string): Observable<any> {
    return this.hc.put<any>(`${this.apiurl}${apiname}`, req)
  }
  deleteApi( apiname: string): Observable<any> {
    return this.hc.delete<any>(`${this.apiurl}${apiname}`)
  }
}
