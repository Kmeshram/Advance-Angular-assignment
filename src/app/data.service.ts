import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<any>(null);

  constructor(private http:HttpClient) {

   }
// only use Observable 
  //  fetchData():Observable<any>{
  //   return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1')
  //  }

  //  when we using the BehaviorSubject  
   fetchData() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(
      data => {
        this.dataSubject.next(data);
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getData(): Observable<any> {
    return this.dataSubject.asObservable();
  }
}
