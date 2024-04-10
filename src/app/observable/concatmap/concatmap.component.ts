import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {
  constructor(private du:DesignUtilityService){}
  ngOnInit(): void {
    const source=from(['Tech','Comedy','News']);

    // Ex:01 
  source.pipe(
    map(res=>this.getData(res))
  )
  .subscribe(res=>res.subscribe(res2=>{
    // console.log(res2);
    this.du.print(res2,'elContainer')
  }));
  
    // Ex:02 :MergeMap
    source.pipe(
      mergeMap(res=>this.getData(res)),
      // concatAll()
    )
    .subscribe(res=>{
       this.du.print(res,'elContainer2')
    });
  
  
     // Ex:03:concatAll
     source.pipe(
      concatMap(res=>this.getData(res)),
  
      )
    .subscribe(res=>{
       this.du.print(res,'elContainer3')
    });
  
  }
  
  getData(data:any){
    return of(data + ' vedio Uploades').pipe(delay(3000))
  }

  }

