import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentAddFormFileFieldComponent } from './assessment-add-form-file-field.component';

describe('AssessmentAddFormFileFieldComponent', () => {
  let component: AssessmentAddFormFileFieldComponent;
  let fixture: ComponentFixture<AssessmentAddFormFileFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentAddFormFileFieldComponent]
    });
    fixture = TestBed.createComponent(AssessmentAddFormFileFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
