import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepvizardFormComponent } from './stepvizard-form.component';

describe('StepvizardFormComponent', () => {
  let component: StepvizardFormComponent;
  let fixture: ComponentFixture<StepvizardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepvizardFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepvizardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
