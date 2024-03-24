import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularmaterialdatepickerComponent } from './angularmaterialdatepicker.component';

describe('AngularmaterialdatepickerComponent', () => {
  let component: AngularmaterialdatepickerComponent;
  let fixture: ComponentFixture<AngularmaterialdatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularmaterialdatepickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularmaterialdatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
