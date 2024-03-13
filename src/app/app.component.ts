import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChangeDetectComponent } from './change-detect/change-detect.component';
import { LiveNewsComponent } from './live-news/live-news.component';
import { AddCustomerByTplFrmComponent } from './add-customer-by-tpl-frm/add-customer-by-tpl-frm.component';
import { AddCustomerByRctFrmComponent } from './add-customer-by-rct-frm/add-customer-by-rct-frm.component';
import { AngularCalculatorComponent } from './angular-calculator/angular-calculator.component';
import { AngularMaterialStepperComponent } from './angular-material-stepper/angular-material-stepper.component';
import { AngularmaterialdatepickerComponent } from './angularmaterialdatepicker/angularmaterialdatepicker.component';
import { AngularMaterialChipsComponent } from './angular-material-chips/angular-material-chips.component';
import { AngularMaterialDialogComponent } from './angular-material-dialog/angular-material-dialog.component';
import { AngularMaterialSidenavComponent } from './angular-material-sidenav/angular-material-sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChangeDetectComponent, LiveNewsComponent, AddCustomerByTplFrmComponent, 
    AddCustomerByRctFrmComponent, AngularCalculatorComponent, AngularMaterialStepperComponent,
    AngularmaterialdatepickerComponent, AngularMaterialChipsComponent,AngularMaterialDialogComponent,AngularMaterialSidenavComponent,RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularassignment';
}
