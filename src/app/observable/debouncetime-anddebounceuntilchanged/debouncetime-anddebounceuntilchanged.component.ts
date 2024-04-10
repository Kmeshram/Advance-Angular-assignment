import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debouncetime-anddebounceuntilchanged',
  templateUrl: './debouncetime-anddebounceuntilchanged.component.html',
  styleUrls: ['./debouncetime-anddebounceuntilchanged.component.scss']
})
export class DebouncetimeAnddebounceuntilchangedComponent implements OnInit, AfterViewInit{
@ViewChild('myInput') myInput!:ElementRef;
@ViewChild('myInput2') myInput2!:ElementRef;

reqData:any=null;
reqData2:any=null

constructor(){}
ngOnInit(){
}
ngAfterViewInit(): void {
  // ex:01 debouncetime 
  const searchTerm=fromEvent<any>(this.myInput.nativeElement,'keyup').pipe(
    map(event=>event!.target.value),
    debounceTime(1000),
  )
searchTerm.subscribe(res=>{
  console.log(res)
this.reqData=res ;
setTimeout(() => {
  this.reqData=null
}, 2000);
 })


// ex:02 distinctUntilChanged
 const searchTerm2=fromEvent<any>(this.myInput2.nativeElement,'keyup').pipe(
  map(event=>event!.target.value),
  debounceTime(500),
  distinctUntilChanged()

)
searchTerm2.subscribe(res=>{
console.log(res)
this.reqData2=res ;
setTimeout(() => {
this.reqData2=null
}, 2000);
})
}
}
