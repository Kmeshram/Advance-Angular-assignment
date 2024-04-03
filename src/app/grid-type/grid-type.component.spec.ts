import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTypeComponent } from './grid-type.component';

describe('GridTypeComponent', () => {
  let component: GridTypeComponent;
  let fixture: ComponentFixture<GridTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
