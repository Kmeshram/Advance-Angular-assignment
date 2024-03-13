import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialStepperComponent } from './angular-material-stepper.component';

describe('AngularMaterialStepperComponent', () => {
  let component: AngularMaterialStepperComponent;
  let fixture: ComponentFixture<AngularMaterialStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularMaterialStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularMaterialStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
