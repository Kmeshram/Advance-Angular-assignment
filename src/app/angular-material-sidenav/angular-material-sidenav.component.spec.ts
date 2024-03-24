import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialSidenavComponent } from './angular-material-sidenav.component';

describe('AngularMaterialSidenavComponent', () => {
  let component: AngularMaterialSidenavComponent;
  let fixture: ComponentFixture<AngularMaterialSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularMaterialSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularMaterialSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
