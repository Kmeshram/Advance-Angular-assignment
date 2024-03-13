import { Routes } from '@angular/router';
import { ChangeDetectComponent } from './change-detect/change-detect.component';
import { LiveNewsComponent } from './live-news/live-news.component';
import { AddCustomerByTplFrmComponent } from './add-customer-by-tpl-frm/add-customer-by-tpl-frm.component';
import { AddCustomerByRctFrmComponent } from './add-customer-by-rct-frm/add-customer-by-rct-frm.component';
import { AngularCalculatorComponent } from './angular-calculator/angular-calculator.component';
import { AngularMaterialStepperComponent } from './angular-material-stepper/angular-material-stepper.component';
import { AngularMaterialChipsComponent } from './angular-material-chips/angular-material-chips.component';
import { AngularmaterialdatepickerComponent } from './angularmaterialdatepicker/angularmaterialdatepicker.component';
import { AngularMaterialDialogComponent } from './angular-material-dialog/angular-material-dialog.component';
import { AngularMaterialSidenavComponent } from './angular-material-sidenav/angular-material-sidenav.component';
import { SortingtableheaderComponent } from './sortingtableheader/sortingtableheader.component';

export const routes: Routes = [
    {path:'', component:AngularMaterialSidenavComponent, title:''},

    {path:'changedetection', component:ChangeDetectComponent, title:'Changedetection'},
    {path:'livenews', component:LiveNewsComponent, title:'livenews'},
    {path:'templateform', component:AddCustomerByTplFrmComponent, title:'templateform'},
    {path:'reactiveform', component:AddCustomerByRctFrmComponent, title:'reactiveform'},
    {path:'calculator', component:AngularCalculatorComponent, title:'calculator'},
    {path:'stepper', component:AngularMaterialStepperComponent, title:'angularmaterialstepper'},
    {path:'chips', component:AngularMaterialChipsComponent, title:'angularmaterialchips'},
    {path:'dailog', component:AngularMaterialDialogComponent, title:'angularmaterialdialog'},
    {path:'sidenav', component:AngularMaterialSidenavComponent, title:'angularmaterialsidnav'},
    {path:'datepicker', component:AngularmaterialdatepickerComponent, title:'angularmaterialdatepicker'},
    {path:'sortingheader', component:SortingtableheaderComponent, title:'sortingtableheader'},








];
