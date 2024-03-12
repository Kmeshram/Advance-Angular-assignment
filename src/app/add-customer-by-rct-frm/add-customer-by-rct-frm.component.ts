import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer-by-rct-frm',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './add-customer-by-rct-frm.component.html',
  styleUrl: './add-customer-by-rct-frm.component.scss'
})
export class AddCustomerByRctFrmComponent {

}
