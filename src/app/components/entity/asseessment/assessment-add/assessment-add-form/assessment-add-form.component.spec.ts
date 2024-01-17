import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentAddFormComponent } from './assessment-add-form.component';

describe('AssessmentAddFormComponent', () => {
  let component: AssessmentAddFormComponent;
  let fixture: ComponentFixture<AssessmentAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentAddFormComponent]
    });
    fixture = TestBed.createComponent(AssessmentAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
