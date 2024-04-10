import { Component } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent {
  constructor(private du:DesignUtilityService){}
  ngOnInit(){
    const sourceTech=interval(1000).pipe( map((v:number)=>'Tech video'+ ' '+ (v+1)),take(5))
  const sourceComedy=interval(1000).pipe( map((v:number)=>'Comedy video'+ ' ' + (v+1)),take(3))
  const sourceNews=interval(1000).pipe( map((v:number)=>'News video'+ ' '+ (v+1)),take(4))

  
  const finalObs=merge(sourceTech,sourceComedy,sourceNews)
  
  finalObs.subscribe(res=>{
      console.log(res);
      this.du.print(res, 'elContainer')
  
    })
  
    
  }
}
