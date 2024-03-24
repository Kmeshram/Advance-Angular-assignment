import { Component, ViewChild } from '@angular/core';
import { InsertUser } from '../user.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationService } from '../validation.service';
declare var $: any
@Component({
  selector: 'app-add-customer-by-tpl-frm',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-customer-by-tpl-frm.component.html',
  styleUrl: './add-customer-by-tpl-frm.component.scss'
})
export class AddCustomerByTplFrmComponent {
  insertUserReq = new InsertUser();
  showToaster: boolean = false;
  showToasterinvalid: boolean = false
  @ViewChild('customerForm', { static: true }) customerForm!: NgForm;
  constructor(public vs: ValidationService) {
  }
  ngOnInit() {

  }
  insertCustomer() {
    console.log(this.customerForm)
    if (this.customerForm.valid) {
      this.showToaster = true
      localStorage.setItem('firstName', this.insertUserReq.firstName);
      localStorage.setItem('lastName', this.insertUserReq.lastName);
      localStorage.setItem('email', this.insertUserReq.email);
      localStorage.setItem('dob', this.insertUserReq.dob);
      localStorage.setItem('mobileno', this.insertUserReq.mobileNo);
      localStorage.setItem('address', this.insertUserReq.address);
      localStorage.setItem('pincode', this.insertUserReq.pinCode);
      setTimeout(() => {

        this.showToaster = false
        this.customerForm.resetForm()
      }, 3000);
    }
    else {
      this.showToasterinvalid = true
      setTimeout(() => {
        this.showToasterinvalid = false

      }, 3000);
    }
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
