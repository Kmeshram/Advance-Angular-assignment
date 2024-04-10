import { Component } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent {
constructor(private du:DesignUtilityService){}
ngOnInit(){
  const sourceTech=interval(1000).pipe( map((v:number)=>'Tech video'+ ' '+ (v+1)),take(5))
  const sourceComedy=interval(1000).pipe( map((v:number)=>'Comedy video'+ ' ' + (v+1)),take(3))
  const sourceNews=interval(1000).pipe( map((v:number)=>'News video'+ ' '+ (v+1)),take(4))


const finalObs=concat(sourceTech,sourceComedy,sourceNews)

finalObs.subscribe(res=>{
    console.log(res);
    this.du.print(res, 'elContainer')

  })

  
}
}
