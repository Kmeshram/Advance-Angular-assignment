import { Conditional } from '@angular/compiler';
import { Component } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent {
constructor(private du:DesignUtilityService){}
randomName=['Ram','Josan','Alexa','Shyam','Nikita','Rajesh','John']
ngOnInit(){
const nameSource=from(this.randomName)


// ex:01 
nameSource.pipe(take(5)).subscribe(res=>{
    console.log(res)
this.du.print(res,'elContainer')
  })

  // ex:02 
nameSource.pipe(takeLast(3)).subscribe(res=>{
  console.log(res)
this.du.print(res,'elContainer2')
})


  // ex:03 
  const source=interval(1000);
  let condition1=timer(5000);
  let condition2=fromEvent(document, 'click')

  source.pipe(
    map(res=>'number'+' '+res),
    // takeUntil(condition1),
    takeUntil(condition2)

  ).subscribe(res=>{
    console.log(res)
  this.du.print(res,'elContainer3')
  })
}
}
