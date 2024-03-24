import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydemocomComponent } from './mydemocom.component';

describe('MydemocomComponent', () => {
  let component: MydemocomComponent;
  let fixture: ComponentFixture<MydemocomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MydemocomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MydemocomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
