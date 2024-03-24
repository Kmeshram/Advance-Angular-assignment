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
import { AngularmaterialtableComponent } from './angularmaterialtable/angularmaterialtable.component';
import { AngularautocompleteComponent } from './angularautocomplete/angularautocomplete.component';
import { ExpandedtableComponent } from './expandedtable/expandedtable.component';
import { DynamictableComponent } from './dynamictable/dynamictable.component';
import { MydemocomComponent } from './mydemocom/mydemocom.component';
import { HttppostComponent } from './httppost/httppost.component';
import { HttpgetComponent } from './httpget/httpget.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditdetailComponent } from './editdetail/editdetail.component';

export const routes: Routes = [
  { path: '', component: AngularMaterialSidenavComponent, title: '' },

  { path: 'changedetection', component: ChangeDetectComponent, title: 'Changedetection' },
  { path: 'livenews', component: LiveNewsComponent, title: 'livenews' },
  { path: 'templateform', component: AddCustomerByTplFrmComponent, title: 'templateform' },
  { path: 'reactiveform', component: AddCustomerByRctFrmComponent, title: 'reactiveform' },
  { path: 'httppost', component: HttppostComponent, title: 'htttppostapicall' },
  { path: 'httpget', component: HttpgetComponent, title: 'htttpgetapicall' },
  { path: 'userdetail/:id', component: UserDetailComponent, title: 'Userdetail' },
  { path: 'editdetail/:id', component: EditdetailComponent, title: 'Editdetail' },

  { path: 'miscellaneous', component: MydemocomComponent, title: 'Miscellaneous' },
  { path: 'calculator', component: AngularCalculatorComponent, title: 'calculator' },
  { path: 'stepper', component: AngularMaterialStepperComponent, title: 'angularmaterialstepper' },
  { path: 'chips', component: AngularMaterialChipsComponent, title: 'angularmaterialchips' },
  { path: 'dailog', component: AngularMaterialDialogComponent, title: 'angularmaterialdialog' },
  { path: 'sidenav', component: AngularMaterialSidenavComponent, title: 'angularmaterialsidnav' },
  { path: 'datepicker', component: AngularmaterialdatepickerComponent, title: 'angularmaterialdatepicker' },
  { path: 'sortingheader', component: SortingtableheaderComponent, title: 'sortingtableheader' },

  { path: 'basictable', component: AngularmaterialtableComponent, title: 'Basictable' },
  { path: 'dynamictable', component: DynamictableComponent, title: 'Dynamictable' },
  { path: 'expandedtable', component: ExpandedtableComponent, title: 'Expandedtable' },

  { path: 'autocomplete', component: AngularautocompleteComponent, title: 'autocomplete' },







];
