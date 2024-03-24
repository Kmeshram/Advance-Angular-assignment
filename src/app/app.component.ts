import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChangeDetectComponent } from './change-detect/change-detect.component';
import { LiveNewsComponent } from './live-news/live-news.component';
import { CdkColumnDef } from '@angular/cdk/table';
import { AddCustomerByTplFrmComponent } from './add-customer-by-tpl-frm/add-customer-by-tpl-frm.component';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChangeDetectComponent, LiveNewsComponent,AddCustomerByTplFrmComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularassignment';
  baseUrl=environment.baseUrl
}
