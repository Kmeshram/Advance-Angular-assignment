import { Component, ElementRef, ViewChild } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {
  @ViewChild('uName') uName!:ElementRef;
  userName!:string;
constructor(private du:DesignUtilityService){
  this.du.userName.subscribe(res=>{
    this.userName=res
})}
ngOnInit(){

}
onChange(uName:any){
  console.log(uName.value);
  this.du.userName.next(uName.value)
}
}
