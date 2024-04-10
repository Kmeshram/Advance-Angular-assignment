import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-replysubject',
  templateUrl: './replysubject.component.html',
  styleUrls: ['./replysubject.component.scss']
})
export class ReplysubjectComponent implements OnInit {
  user1List=['Angular1', 'Angular2'];
  user2List:any[]=[];
  user3List:any[]=[];

  subscribeMode2:boolean=false;
  subscribeMode3:boolean=false

user3Subscription!:Subscription;
user2Subscription!:Subscription

methodInterval:boolean=false
constructor(private du:DesignUtilityService){}
ngOnInit(): void {
  this.du.videoEmit.subscribe(res=>{
    console.log(res);
    this.user1List.push(res)
  })
  
}
onVideoAdd(video:any){
// console.log(video.value);
this.du.videoEmit.next(video.value);

}
user2Subscribe(){
  if(this.subscribeMode2){
    this.user2Subscription.unsubscribe()
  }
  else{
    this.user2Subscription= this.du.videoEmit.subscribe(res=>{
      this.user2List.push(res)
    })
  }

  this.subscribeMode2= !this.subscribeMode2
}
user3Subscribe(){
  if(this.subscribeMode3){
    this.user3Subscription.unsubscribe()
  }
  else{
    this.user3Subscription= this.du.videoEmit.subscribe(res=>{
      this.user3List.push(res)
    })
  }

  this.subscribeMode3= !this.subscribeMode3
}
intSubscription!:Subscription;
toggleMethod(){
  const boroadCastVideo=interval(1000);
  if(!this.methodInterval){
    this.intSubscription=boroadCastVideo.subscribe(res=>{
      this.du.videoEmit.next('Video' + res)
    })
  }
  else{
    this.intSubscription.unsubscribe()
  }

  this.methodInterval= !this.methodInterval

}
}
