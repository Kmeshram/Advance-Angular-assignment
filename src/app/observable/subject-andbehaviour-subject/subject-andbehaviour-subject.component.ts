import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-subject-andbehaviour-subject',
  templateUrl: './subject-andbehaviour-subject.component.html',
  styleUrls: ['./subject-andbehaviour-subject.component.scss']
})
export class SubjectAndbehaviourSubjectComponent  implements OnInit, OnDestroy{
  userName!:string;
constructor(private du:DesignUtilityService){
  this.du.userName.subscribe(res=>{
this.userName=res
  })
}
ngOnInit(){
this.du.exclusive.next(true)
}
ngOnDestroy(){
  this.du.exclusive.next(false)

}
}
