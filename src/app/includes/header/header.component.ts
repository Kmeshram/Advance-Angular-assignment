import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  exclusive:boolean=false;
  constructor(private du:DesignUtilityService){

  }
  ngOnInit(){
    this.du.exclusive.subscribe(res=>{
      this.exclusive=res
    })
  }
}
