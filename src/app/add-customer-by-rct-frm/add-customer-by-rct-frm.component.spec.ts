import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerByRctFrmComponent } from './add-customer-by-rct-frm.component';

describe('AddCustomerByRctFrmComponent', () => {
  let component: AddCustomerByRctFrmComponent;
  let fixture: ComponentFixture<AddCustomerByRctFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCustomerByRctFrmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCustomerByRctFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
