import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-offrom',
  templateUrl: './offrom.component.html',
  styleUrls: ['./offrom.component.scss']
})
export class OffromComponent {
  obsMsg:any
constructor(private designUtility:DesignUtilityService){

}
ngOnInit(){
//example for Of operator

let Obs1=of('Ram','Josan' ,'Alexa');
Obs1.subscribe((res)=>{
  this.designUtility.print(res, 'elContainer')
})

//example for Of operator for object

let Obs2=of({a:'Ram', b:'Josan', c:'Alexa'})
Obs2.subscribe((res)=>{
  this.obsMsg=res
  console.log(this.obsMsg)
})

//example for from operator-Array
let Arr=['Ram','Josan' ,'Alexa'];
let Obs3=from(Arr);
Obs3.subscribe((res)=>{
  this.designUtility.print(res, 'elContainer2')
})


//example for from operator-prominse to observable
const promise=new Promise((resolve)=>{
setTimeout(() => {
  resolve('promise resolved')
}, 3000);
})


let Obs4=from(promise);
Obs4.subscribe((res)=>{
  this.designUtility.print(res, 'elContainer3')
})


//example for from operator-string to observable

let Obs5=from('welcome to rxjs');
Obs5.subscribe((res)=>{
  this.designUtility.print(res, 'elContainer4')
})
}
}

