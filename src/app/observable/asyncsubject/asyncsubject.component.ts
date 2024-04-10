import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-asyncsubject',
  templateUrl: './asyncsubject.component.html',
  styleUrls: ['./asyncsubject.component.scss']
})
export class AsyncsubjectComponent implements OnInit {

  asyncVideoEmit!:any;
constructor(private du:DesignUtilityService){}
ngOnInit(): void {
this.du.asyncVideoEmit.subscribe(res=>{
  this.asyncVideoEmit=res
  console.log(res)
})

  
  
}
onVideoAdd(video:any){
console.log(video.value);
this.du.asyncVideoEmit.next(video.value);

}

onCompleted(){
  this.du.asyncVideoEmit.complete()
}

}
