import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncetimeAnddebounceuntilchangedComponent } from './debouncetime-anddebounceuntilchanged.component';

describe('DebouncetimeAnddebounceuntilchangedComponent', () => {
  let component: DebouncetimeAnddebounceuntilchangedComponent;
  let fixture: ComponentFixture<DebouncetimeAnddebounceuntilchangedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebouncetimeAnddebounceuntilchangedComponent]
    });
    fixture = TestBed.createComponent(DebouncetimeAnddebounceuntilchangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
