import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentsListEntryComponent } from './assessments-list-entry.component';

describe('AssessmentsListEntryComponent', () => {
  let component: AssessmentsListEntryComponent;
  let fixture: ComponentFixture<AssessmentsListEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentsListEntryComponent]
    });
    fixture = TestBed.createComponent(AssessmentsListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
