import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSurveyFormComponent } from './student-survey-form.component';

describe('StudentSurveyFormComponent', () => {
  let component: StudentSurveyFormComponent;
  let fixture: ComponentFixture<StudentSurveyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSurveyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
