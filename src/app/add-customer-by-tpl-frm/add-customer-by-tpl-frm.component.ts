import { Component, ViewChild, viewChild } from '@angular/core';
import { InserCustomer } from '../user.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-add-customer-by-tpl-frm',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-customer-by-tpl-frm.component.html',
  styleUrl: './add-customer-by-tpl-frm.component.scss'
})
export class AddCustomerByTplFrmComponent {
  insertUserReq = new InserCustomer();
  showToaster: boolean = false;
  showToasterinvalid: boolean = false
  @ViewChild('customerForm', { read: NgForm }) customerForm!: NgForm;
  constructor(public vs:ValidationService) {

  }
  ngOnInIt() {

  }
  insertCustomer() {
    if (this.customerForm.valid) {
      this.showToaster = true

      localStorage.setItem('firstname', this.insertUserReq.firstName)
      localStorage.setItem('lastname', this.insertUserReq.lastName)
      localStorage.setItem('email', this.insertUserReq.email)
      localStorage.setItem('dob', this.insertUserReq.dob)
      localStorage.setItem('address', this.insertUserReq.address)
      localStorage.setItem('mobileno', this.insertUserReq.mobileNo)
      localStorage.setItem('pincode', this.insertUserReq.pinCode)
      setTimeout(() => {
        this.showToaster = false

      }, 2000);
    }
    else {
      this.showToasterinvalid = true

      setTimeout(() => {
        this.showToasterinvalid = false
      }, 3000);
    }
  }
}
