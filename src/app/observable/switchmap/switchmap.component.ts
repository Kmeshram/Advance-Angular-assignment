import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, map, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {
  constructor(private du: DesignUtilityService) { }
  ngOnInit() {
    const source = from(['Tech', 'Comedy', 'News']);
// ex-01 map 
    // source.pipe(
    //   map(data => this.getData(data))
    // ).subscribe(res => res.subscribe(res2 => {
    //     this.du.print(res2, 'elContainer')
    //   })
    // )


// ex-02: map + switchAll
// source.pipe(map(data=>this.getData(data)),switchAll()
// ).subscribe(res=>{
//   console.log(res)
//   this.du.print(res, 'elContainer2')

// })


// ex-02: mergeMap
source.pipe(mergeMap(data=>this.getData(data))

).subscribe(res=>{
  console.log(res)
  this.du.print(res, 'elContainer')

})

// ex-02: concatMap
source.pipe(concatMap(data=>this.getData(data))
).subscribe(res=>{
  console.log(res)
  this.du.print(res, 'elContainer2')

})

// ex-03: SwitchMap
source.pipe(switchMap(data=>this.getData(data))

).subscribe(res=>{
  console.log(res)
  this.du.print(res, 'elContainer3')

})
  }
  getData(data: any) {
    return of(data + ' vedio Uploades').pipe(delay(1000))
  }
}