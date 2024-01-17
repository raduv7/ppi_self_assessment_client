import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentChartComponent } from './assessment-chart.component';

describe('AssessmentChartComponent', () => {
  let component: AssessmentChartComponent;
  let fixture: ComponentFixture<AssessmentChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentChartComponent]
    });
    fixture = TestBed.createComponent(AssessmentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
