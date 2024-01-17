import {Component, OnInit} from '@angular/core';
import {AssessService} from "../../../../utils/services/entities/assess/assess.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AssessmentResult} from "../../../../utils/models/entities/assessment/assessment-result";
import {SafeUrl} from "@angular/platform-browser";
import {Observable} from "rxjs";

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  chartData: any[] = [];
  hasVideo: boolean = false;
  videoUrl: SafeUrl = '';
  private readonly timestamp: number = 0;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private assessmentService: AssessService,
  ) {
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation?.extras.state) {

      const state = currentNavigation.extras.state as { hasVideo: boolean, timestamp: number };
      this.hasVideo = state.hasVideo;
      this.timestamp = state.timestamp;
      console.log('assessmentComponent: constructor: hasVideo:', this.hasVideo, 'timestamp:', this.timestamp);
    }
  }

  ngOnInit(): void {
    this.assessmentService.getOneResult(this.timestamp).subscribe(
        (response: AssessmentResult) => {
            console.log('assessAddFormComponent: ngOnInit: Response:', response);
            this.chartData = response.feelings;
        },
        (error: any) => {
            console.error('assessAddFormComponent: ngOnInit: Error:', error);
            this.snackBar.open('Error uploading result', 'Close', { duration: 4000 });
        }
    );

    this.getSafeVideoUrl().subscribe(
        (response: SafeUrl) => {
            console.log('assessmentComponent: ngOnInit: Response:', response);
            this.videoUrl = response;
        },
        (error: any) => {
            console.error('assessmentComponent: ngOnInit: Error:', error);
            this.snackBar.open('Error uploading result', 'Close', { duration: 4000 });
        }
    );

    // this.loadChartMockData();
  }

  getSafeVideoUrl(): Observable<SafeUrl> {
    return this.assessmentService.getOneInputVideoUrl(this.timestamp);
  }

  getUnsafeVideoUrl(): string {
    return this.hasVideo ? this.assessmentService.getMyBaseURI() + '/' + this.timestamp + '/inputs/video' : '';
  }

  private loadChartMockData(): void {
    this.chartData =
        [
          {
            "name": "El Salvador",
            "series": [
              {
                "value": 6084,
                "name": "2016-09-21T17:02:29.153Z"
              },
              {
                "value": 3460,
                "name": "2016-09-21T12:48:39.133Z"
              },
              {
                "value": 2577,
                "name": "2016-09-18T21:41:13.224Z"
              },
              {
                "value": 6377,
                "name": "2016-09-14T17:26:17.908Z"
              },
              {
                "value": 3312,
                "name": "2016-09-22T14:53:41.907Z"
              },
              {
                "name": "2016-09-20T23:45:07.170Z",
                "value": 2555
              },
              {
                "name": "2016-09-17T15:03:39.811Z",
                "value": 6510
              },
              {
                "name": "2016-09-13T12:03:38.420Z",
                "value": 4460
              },
              {
                "name": "2016-09-22T16:26:47.534Z",
                "value": 3810
              },
              {
                "name": "2016-09-18T21:50:06.738Z",
                "value": 2257
              },
              {
                "name": "2016-09-14T05:00:23.561Z",
                "value": 5054
              }
            ]
          },
          {
            "name": "Heard Island and Mcdonald Islands",
            "series": [
              {
                "value": 3534,
                "name": "2016-09-21T17:02:29.153Z"
              },
              {
                "value": 4573,
                "name": "2016-09-21T12:48:39.133Z"
              },
              {
                "value": 3517,
                "name": "2016-09-18T21:41:13.224Z"
              },
              {
                "value": 3144,
                "name": "2016-09-14T17:26:17.908Z"
              },
              {
                "value": 3365,
                "name": "2016-09-22T14:53:41.907Z"
              },
              {
                "name": "2016-09-20T23:45:07.170Z",
                "value": 4056
              },
              {
                "name": "2016-09-17T15:03:39.811Z",
                "value": 6372
              },
              {
                "name": "2016-09-13T12:03:38.420Z",
                "value": 2843
              },
              {
                "name": "2016-09-22T16:26:47.534Z",
                "value": 4650
              },
              {
                "name": "2016-09-18T21:50:06.738Z",
                "value": 6460
              },
              {
                "name": "2016-09-14T05:00:23.561Z",
                "value": 3078
              }
            ]
          },
          {
            "name": "Cocos (Keeling) Islands",
            "series": [
              {
                "value": 3733,
                "name": "2016-09-21T17:02:29.153Z"
              },
              {
                "value": 4445,
                "name": "2016-09-21T12:48:39.133Z"
              },
              {
                "value": 2670,
                "name": "2016-09-18T21:41:13.224Z"
              },
              {
                "value": 3855,
                "name": "2016-09-14T17:26:17.908Z"
              },
              {
                "value": 2644,
                "name": "2016-09-22T14:53:41.907Z"
              },
              {
                "name": "2016-09-20T23:45:07.170Z",
                "value": 6350
              },
              {
                "name": "2016-09-17T15:03:39.811Z",
                "value": 2860
              },
              {
                "name": "2016-09-13T12:03:38.420Z",
                "value": 6007
              },
              {
                "name": "2016-09-22T16:26:47.534Z",
                "value": 5036
              },
              {
                "name": "2016-09-18T21:50:06.738Z",
                "value": 4413
              },
              {
                "name": "2016-09-14T05:00:23.561Z",
                "value": 2577
              }
            ]
          },
          {
            "name": "Solomon Islands",
            "series": [
              {
                "value": 5519,
                "name": "2016-09-21T17:02:29.153Z"
              },
              {
                "value": 4711,
                "name": "2016-09-21T12:48:39.133Z"
              },
              {
                "value": 2936,
                "name": "2016-09-18T21:41:13.224Z"
              },
              {
                "value": 5036,
                "name": "2016-09-14T17:26:17.908Z"
              },
              {
                "value": 4700,
                "name": "2016-09-22T14:53:41.907Z"
              },
              {
                "name": "2016-09-20T23:45:07.170Z",
                "value": 5658
              },
              {
                "name": "2016-09-17T15:03:39.811Z",
                "value": 4358
              },
              {
                "name": "2016-09-13T12:03:38.420Z",
                "value": 4606
              },
              {
                "name": "2016-09-22T16:26:47.534Z",
                "value": 5825
              },
              {
                "name": "2016-09-18T21:50:06.738Z",
                "value": 6886
              },
              {
                "name": "2016-09-14T05:00:23.561Z",
                "value": 5508
              }
            ]
          },
          {
            "name": "Grenada",
            "series": [
              {
                "value": 4396,
                "name": "2016-09-21T17:02:29.153Z"
              },
              {
                "value": 6243,
                "name": "2016-09-21T12:48:39.133Z"
              },
              {
                "value": 4662,
                "name": "2016-09-18T21:41:13.224Z"
              },
              {
                "value": 2108,
                "name": "2016-09-14T17:26:17.908Z"
              },
              {
                "value": 6239,
                "name": "2016-09-22T14:53:41.907Z"
              },
              {
                "name": "2016-09-20T23:45:07.170Z",
                "value": 4098
              },
              {
                "name": "2016-09-17T15:03:39.811Z",
                "value": 5874
              },
              {
                "name": "2016-09-13T12:03:38.420Z",
                "value": 2064
              },
              {
                "name": "2016-09-22T16:26:47.534Z",
                "value": 4952
              },
              {
                "name": "2016-09-18T21:50:06.738Z",
                "value": 4685
              },
              {
                "name": "2016-09-14T05:00:23.561Z",
                "value": 6614
              }
            ]
          }
        ];
  }
}
