import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Assessment} from "../../../../utils/models/entities/assessment/assessment";
import {AssessService} from "../../../../utils/services/entities/assess/assess.service";

@Component({
  selector: 'app-assessments-list',
  templateUrl: './assessments-list.component.html',
  styleUrls: ['./assessments-list.component.scss']
})
export class AssessmentsListComponent implements OnInit {
  public assessments: Assessment[] = [];

  constructor(
    private router: Router,
    private assessmentService: AssessService,
  ) {
  }

  ngOnInit(): void {
    this.assessmentService.getAllAssessments()
      .subscribe(assessments => {
        // console.log(assessments);
        this.assessments = assessments;
      });
  }

  onEntryClick(assessment: Assessment): void {
    this.router.navigate(["/assessment/", assessment.timestamp], {state: { hasVideo: assessment.hasVideo, timestamp: assessment.timestamp }});
  }
}
