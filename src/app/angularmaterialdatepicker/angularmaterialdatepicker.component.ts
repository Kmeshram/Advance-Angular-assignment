import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-angularmaterialdatepicker',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './angularmaterialdatepicker.component.html',
  styleUrl: './angularmaterialdatepicker.component.scss'
})
export class AngularmaterialdatepickerComponent {
  startDate = new Date(1990, 0, 1);
}
