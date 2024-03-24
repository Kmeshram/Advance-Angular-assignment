import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularmaterialtableComponent } from './angularmaterialtable.component';

describe('AngularmaterialtableComponent', () => {
  let component: AngularmaterialtableComponent;
  let fixture: ComponentFixture<AngularmaterialtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularmaterialtableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularmaterialtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
