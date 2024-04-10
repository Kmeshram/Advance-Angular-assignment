import { Component } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.scss']
})
export class ToarrayComponent {

  user=[
    {name:'Ram', skill:'Angular'},
    {name:'Shyam', skill:'React'},
     {name:'Josan', skill:'Html CSS'}, 
     {name:'Alexa', skill:'javaScript'}
  ]
constructor(){
}
sourceSubscription!:Subscription
ngOnInit(){
  // example 1
  const source=interval(1000)
this.sourceSubscription=source.pipe(
  take(5),
  toArray()
)
.subscribe((res)=>{
// console.log(res);
})

// example 2
const source2=from(this.user);
source2.pipe(
  toArray()
)
.subscribe((res)=>{
  // console.log(res)
})

// example 3 
const source3=of('Ram', 'Jonson')
source3.pipe(toArray()).subscribe((res)=>{
  console.log(res)
})
}
}
