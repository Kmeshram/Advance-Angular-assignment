import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeDetectComponent } from './change-detect/change-detect.component';
import { LiveNewsComponent } from './live-news/live-news.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { CdkColumnDef } from '@angular/cdk/table';
import { AddCustomerByTplFrmComponent } from './add-customer-by-tpl-frm/add-customer-by-tpl-frm.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChangeDetectComponent, LiveNewsComponent,AddCustomerByTplFrmComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularassignment';
}
