import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFormlyCellComponent } from './grid-formly-cell.component';

describe('GridFormlyCellComponent', () => {
  let component: GridFormlyCellComponent;
  let fixture: ComponentFixture<GridFormlyCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridFormlyCellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridFormlyCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
