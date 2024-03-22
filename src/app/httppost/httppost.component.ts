import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-httppost',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './httppost.component.html',
  styleUrl: './httppost.component.scss',

})
export class HttppostComponent {

  registrationForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()

  })
  submitted: boolean = false;
  constructor(private fb: FormBuilder, public apicall: ApicallService) {

  }
  ngOnInIt() {
    this.registrationForm = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
        email: ['', [Validators.required, Validators.email]],
      },

    );
  }
  get formValue(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;

  }

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.valid) {
      let req = {
        'email': this.registrationForm.value.email,
        "password": this.registrationForm.value.password
      }
      try {
        this.apicall.postApi(req, 'register').subscribe((response) => {
          if (response.token) {
            alert('successfully Saved')
            localStorage.setItem('id', response.id)
            localStorage.setItem('token', response.token)
            this.submitted = false;
            this.registrationForm.reset();
  
          }
  
        })
      } catch (error) {
        console.log(error)
      }
     

    }



  }
  onReset() {
    this.submitted = false;
    this.registrationForm.reset();
  }
}
