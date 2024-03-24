import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularautocompleteComponent } from './angularautocomplete.component';

describe('AngularautocompleteComponent', () => {
  let component: AngularautocompleteComponent;
  let fixture: ComponentFixture<AngularautocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularautocompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularautocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
