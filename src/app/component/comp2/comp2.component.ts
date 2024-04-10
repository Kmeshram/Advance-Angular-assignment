import { Component, ElementRef, ViewChild } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {
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
