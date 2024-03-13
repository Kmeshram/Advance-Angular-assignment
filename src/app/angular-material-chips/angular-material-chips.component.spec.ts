import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialChipsComponent } from './angular-material-chips.component';

describe('AngularMaterialChipsComponent', () => {
  let component: AngularMaterialChipsComponent;
  let fixture: ComponentFixture<AngularMaterialChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularMaterialChipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularMaterialChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
