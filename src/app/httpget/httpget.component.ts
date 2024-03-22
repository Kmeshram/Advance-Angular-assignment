import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-httpget',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './httpget.component.html',
  styleUrl: './httpget.component.scss'
})
export class HttpgetComponent {
  userData: any
  constructor(public apicall: ApicallService) {

  }
  ngOnInit() {
    this.getuserDetail()

  }
  getuserDetail() {
    try {
      this.apicall.getApi('users').subscribe((response) => {
        this.userData = response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
 
  userId: any
  getData(data: any) {
    this.userId = data.id;
    let text ="Are you sure to delete the user?"
    if (confirm(text) == true) {
      text = "You pressed OK!";
      this.deleteDetail()
    } else {
      text = "You canceled!";
    }
  }

  deleteDetail() {
   this.apicall.deleteApi(`users/${this.userId}`).subscribe((response) => {
    let user = this.userData.filter((x:any)=> x.id !== this.userId);
    alert("successfully Deleted")
    this.userData=user;
    })
  
  }
}
