import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangSelectComponent } from './onchang-select.component';

describe('OnchangSelectComponent', () => {
  let component: OnchangSelectComponent;
  let fixture: ComponentFixture<OnchangSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnchangSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnchangSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
