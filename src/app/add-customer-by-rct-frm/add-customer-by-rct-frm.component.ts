import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';
import { InserCustomer } from '../user.model';

@Component({
  selector: 'app-add-customer-by-rct-frm',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule,],
  templateUrl: './add-customer-by-rct-frm.component.html',
  styleUrl: './add-customer-by-rct-frm.component.scss'
})
export class AddCustomerByRctFrmComponent {
  reactivecustomerForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    address: new FormControl(''),
    mobileNo: new FormControl(),
    pinCode: new FormControl()

  });
  insertUserReq = new InserCustomer();
  showToaster: boolean = false;
  showToasterinvalid: boolean = false
  submitted = false;

  constructor(public vs: ValidationService, private formBuilder: FormBuilder) {

  }
  ngOnInIt() {
    this.reactivecustomerForm = this.formBuilder.group(
      {
        firstName: [this.insertUserReq.firstName, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
        lastName: [this.insertUserReq.lastName, [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
        email: [this.insertUserReq.email, [Validators.required, Validators.email]],
        address: [this.insertUserReq.address],
        dob: [this.insertUserReq.dob, Validators.required],
        mobileNo: [this.insertUserReq.mobileNo, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        pinCode: [this.insertUserReq.pinCode, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      },

    );
  }

  get formValue(): { [key: string]: AbstractControl } {
    return this.reactivecustomerForm.controls;
  }

  onSubmit() {
    this.submitted = true;



    if (this.reactivecustomerForm.valid) {
      this.showToaster = true
      this.insertUserReq = this.reactivecustomerForm.value
      sessionStorage.setItem('firstname', this.insertUserReq.firstName)
      sessionStorage.setItem('lastname', this.insertUserReq.lastName)
      sessionStorage.setItem('email', this.insertUserReq.email)
      sessionStorage.setItem('dob', this.insertUserReq.dob)
      sessionStorage.setItem('address', this.insertUserReq.address)
      sessionStorage.setItem('mobileno', this.insertUserReq.mobileNo)
      sessionStorage.setItem('pincode', this.insertUserReq.pinCode)
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
  onReset() {
    this.submitted = false;
    this.reactivecustomerForm.reset();
  }
}
