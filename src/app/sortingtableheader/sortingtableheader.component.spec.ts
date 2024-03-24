import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingtableheaderComponent } from './sortingtableheader.component';

describe('SortingtableheaderComponent', () => {
  let component: SortingtableheaderComponent;
  let fixture: ComponentFixture<SortingtableheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortingtableheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortingtableheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
