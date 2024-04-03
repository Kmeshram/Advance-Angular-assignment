import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForminTabComponent } from './formin-tab.component';

describe('ForminTabComponent', () => {
  let component: ForminTabComponent;
  let fixture: ComponentFixture<ForminTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForminTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForminTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
