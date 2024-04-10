import { Component } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
constructor(){}

dataArr=[
  { id: 1, name: 'Anup' ,gender:'male'},
  { id: 2, name: 'Rajesh',gender:'male' }, 
  { id: 3, name: 'Priyanka' ,gender:'female'}, 
  { id: 4, name: 'Sanjanan',gender:'female' }, 
  { id: 5, name: 'Dipali' ,gender:'female'}, 
  { id: 6, name: 'Nikhil',gender:'male' }, 
  { id: 7, name: 'Anupama',gender:'female' }, 
  { id: 8, name: 'Vivek' ,gender:'male'},
  { id: 9, name: 'Jitesh' ,gender:'male'},
  { id: 10, name: 'Nalini',gender:'female' },
  { id: 11, name: 'Pradeep',gender:'male' },
  { id: 12, name: 'Ragini',gender:'female' }

]
// ex-02: by length 

data:any;data2:any; data3:any

ngOnInit(){
const source=from(this.dataArr)

source.pipe(
  filter(memeber=>memeber.name.length>6),
toArray()  
).subscribe(res=>{
this.data=res
})

// ex-02: by gender 
source.pipe(
  filter(memeber=>memeber.gender=='male'),
toArray()  
).subscribe(res=>{
this.data2=res
})


// ex-02: by nth  item 
source.pipe(
  filter(memeber=>memeber.id<=6),
toArray()  
).subscribe(res=>{
this.data3=res
})
}

}
