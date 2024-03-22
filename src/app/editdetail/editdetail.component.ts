import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApicallService } from '../apicall.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-editdetail',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './editdetail.component.html',
  styleUrl: './editdetail.component.scss'
})
export class EditdetailComponent {
  userId:any;
  userData:any;
  @ViewChild('userForm', { read: NgForm }) userForm!: NgForm;

constructor(private activatedroute:ActivatedRoute, private apicall:ApicallService,public vs:ValidationService, private router:Router){

}
ngOnInit(){
  this.activatedroute.params.subscribe(params => {
    this.userId = params['id'];
   });
   this.getuserDetail()
}

getuserDetail(){
  this.apicall.getApi(`users/${this.userId}`).subscribe((response)=>{
    this.userData=response.data
  })
}
updateUser(){
if(this.userForm.valid){
  this.apicall.putApi(this.userData,`users/${this.userId}`).subscribe((response)=>{
    alert("Successfully Updated");
    this.router.navigate(['/httpget']);  })
}
}
}
