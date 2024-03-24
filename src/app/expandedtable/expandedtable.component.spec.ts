import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedtableComponent } from './expandedtable.component';

describe('ExpandedtableComponent', () => {
  let component: ExpandedtableComponent;
  let fixture: ComponentFixture<ExpandedtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandedtableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpandedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
