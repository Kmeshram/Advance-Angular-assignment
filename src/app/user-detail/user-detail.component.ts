import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  userId:any;
  userData:any
constructor(private activatedroute:ActivatedRoute, private apicall:ApicallService){

}
ngOnInit(){
  this.activatedroute.params.subscribe(params => {
    this.userId = params['id'];
    console.log(this.userId)
   });
   this.getuserDetail()
}

getuserDetail(){
  this.apicall.getApi(`users/${this.userId}`).subscribe((response)=>{
    this.userData=response.data
  })
}
}
