import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttppostComponent } from './httppost.component';

describe('HttppostComponent', () => {
  let component: HttppostComponent;
  let fixture: ComponentFixture<HttppostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttppostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttppostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
