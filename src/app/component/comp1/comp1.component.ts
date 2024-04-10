import { Component, ElementRef, ViewChild } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {
  @ViewChild('uName') myInput!:ElementRef;
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
