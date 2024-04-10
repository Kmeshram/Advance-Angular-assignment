import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
exclusive=new Subject<boolean>();
userName=new BehaviorSubject<string>('Anup');
videoEmit=new ReplaySubject<any>(3,500);
asyncVideoEmit=new AsyncSubject<any>()
  constructor() { }
  
  print(val:any, conatinerId:any){
    let el=document.createElement('li')
    el.innerText=val
    document.getElementById(conatinerId)?.appendChild(el)
  }
}
