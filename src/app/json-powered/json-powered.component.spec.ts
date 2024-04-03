import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPoweredComponent } from './json-powered.component';

describe('JsonPoweredComponent', () => {
  let component: JsonPoweredComponent;
  let fixture: ComponentFixture<JsonPoweredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsonPoweredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonPoweredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
