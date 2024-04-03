import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  
  apiurl = "https://reqres.in/api/";

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return forkJoin([this.getUser(), this.getFields()]);
  }

  getUser() {
    return this.http.get<{ firstName: string; lastName: string }>('assets/json_schema/user.json');
  }

  getFields() {
    return this.http.get<FormlyFieldConfig[]>('assets/json_schema/user-form.json');
  }

  getColors() {
    return this.http.get<{ label: string; value: string }[]>('assets/json_schema/color.json');
  }

  postApi(req: any, apiname: string): Observable<any> {
    return this.http.post<any>(`${this.apiurl}${apiname}`, req)
  }
  getData() : Observable<any>{
    return this.http.get('https://reqres.in/api/users')
    // toPromise();
  }
  putApi(req: any, apiname: string): Observable<any> {
    return this.http.put<any>(`${this.apiurl}${apiname}`, req)
  }
  deleteApi( apiname: string): Observable<any> {
    return this.http.delete<any>(`${this.apiurl}${apiname}`)
  }
}
