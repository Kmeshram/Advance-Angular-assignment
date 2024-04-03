import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiletypeComponent } from './filetype.component';

describe('FiletypeComponent', () => {
  let component: FiletypeComponent;
  let fixture: ComponentFixture<FiletypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiletypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiletypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
