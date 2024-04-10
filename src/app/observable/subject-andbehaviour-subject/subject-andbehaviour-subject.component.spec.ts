import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAndbehaviourSubjectComponent } from './subject-andbehaviour-subject.component';

describe('SubjectAndbehaviourSubjectComponent', () => {
  let component: SubjectAndbehaviourSubjectComponent;
  let fixture: ComponentFixture<SubjectAndbehaviourSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectAndbehaviourSubjectComponent]
    });
    fixture = TestBed.createComponent(SubjectAndbehaviourSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
