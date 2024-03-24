import { ChangeDetectorRef, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule} from '@angular/material/list'
import { MediaMatcher } from '@angular/cdk/layout';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu'

@Component({
  selector: 'app-angular-material-sidenav',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterOutlet,RouterLink, RouterLinkActive, MatMenuModule],
  templateUrl: './angular-material-sidenav.component.html',
  styleUrl: './angular-material-sidenav.component.scss'
})
export class AngularMaterialSidenavComponent {
  mobileQuery: MediaQueryList;
  opened: boolean=true;

  // fillerNav = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);

 

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}

