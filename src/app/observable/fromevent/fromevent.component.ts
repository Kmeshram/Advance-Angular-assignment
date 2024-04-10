import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.scss']
})
export class FromeventComponent implements AfterViewInit {
  @ViewChild('addBtn')  addBtn!:ElementRef
  constructor(private designUtility:DesignUtilityService){

  }
  ngOnInit(){
   
  }
ngAfterViewInit(): void {
  let count=1
  fromEvent(this.addBtn.nativeElement, 'click').subscribe((response)=>{
    let countVal=('Video' +  ' '+count++)
    this.designUtility.print(countVal,'elContainer')

    this.designUtility.print(countVal,'elContainer2')
  })

  }

  
}

