import {Component, Input, OnInit} from '@angular/core';
import {Assessment} from "../../../../../utils/models/entities/assessment/assessment";

@Component({
  selector: 'app-assessments-list-entry',
  templateUrl: './assessments-list-entry.component.html',
  styleUrls: ['./assessments-list-entry.component.scss']
})
export class AssessmentsListEntryComponent implements OnInit {
  @Input() inputAssessment!: Assessment;
  public assessment: Assessment = new Assessment(0, false, false, false);

  ngOnInit() {
    this.assessment.copy(this.inputAssessment);
  }
}
