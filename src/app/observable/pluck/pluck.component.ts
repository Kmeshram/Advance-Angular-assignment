import { Component } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent {
constructor(){}
users=[
  {name:'Anup',skills:'Angular',job:{title:'Angular Developer',exp:'3 yesrs'}},
  {name:'Alex',skills:'Vuejs', job:{title:'UI Developer',exp:'10 yesrs'}},
  {name:'John',skills:'javaScript',job:{title:'JvaaScript Developer',exp:'5 yesrs'}},
  {name:'Ram',skills:'HTML', job:{title:'UI Designer',exp:'6 yesrs'}},
];
data:any;
data2:any
ngOnInit(){

  // ex:01
 from(this.users).pipe(
  // map(data=>data.name),
  pluck('name'),
  toArray()
 ).subscribe(res=>{
  this.data=res
  console.log(res)
 })


   // ex:02
   from(this.users).pipe(
    // map(data=>data.name),
    pluck('job','title'),
    toArray()
   ).subscribe(res=>{
    this.data2=res
    console.log(res)
   })
}
}
