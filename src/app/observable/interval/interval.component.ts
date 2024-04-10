import { Component } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent {
  obsMsg:any;
  videoSubscription!:Subscription;
constructor(private designUtility:DesignUtilityService){}
ngOnInit(){
  // const broadCastVideos=interval(1000);
  //timer(delay,interval)
  const broadCastVideos=timer(5000, 1000);

 this.videoSubscription= broadCastVideos.subscribe((res)=>{

  this.obsMsg=('Video'+' '+ res)
  this.designUtility.print(this.obsMsg,'elContainer');
  this.designUtility.print(this.obsMsg,'elContainer2');
  this.designUtility.print(this.obsMsg,'elContainer3')


    if(res>=5){
      this.videoSubscription.unsubscribe()
    }
  })
}
}
