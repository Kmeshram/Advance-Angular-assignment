import { Component } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent {
constructor(private du:DesignUtilityService){}
ngOnInit(){
  const source=from(['Tech','Comedy','News']);

  // Ex:01 
source.pipe(
  map(res=>this.getData(res))
)
.subscribe(res=>res.subscribe(res2=>{
  // console.log(res2);
  this.du.print(res2,'elContainer')
}));

  // Ex:02 :Map+mergALl
  source.pipe(
    map(res=>this.getData(res)),
    mergeAll()
  )
  .subscribe(res=>{
     this.du.print(res,'elContainer2')
  });


   // Ex:03 :MergeMap
   source.pipe(
    mergeMap(res=>this.getData(res)),

    )
  .subscribe(res=>{
     this.du.print(res,'elContainer3')
  });

}

getData(data:any){
  return of(data + ' vedio Uploades')
}
}
