import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectComponent } from './change-detect.component';

describe('ChangeDetectComponent', () => {
  let component: ChangeDetectComponent;
  let fixture: ComponentFixture<ChangeDetectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
