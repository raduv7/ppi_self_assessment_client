import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SessionService} from "../../session-management/session.service";
import {environment} from "../../../../../environment/environment";
import {Assessment} from "../../../models/entities/assessment/assessment";
import {map, Observable} from "rxjs";
import {AssessmentResult} from "../../../models/entities/assessment/assessment-result";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class AssessService {

  constructor(
      private sanitizer: DomSanitizer,
      private httpClient: HttpClient,
      private sessionService: SessionService,
  ) {}

  public createAssessment(formData: FormData): Observable<any> {
    console.log("assessService: createAssessment: ", formData);

    const headers = this.sessionService.getHeaders();
    headers.delete('Content-Type'); // Remove Content-Type if it exists

    return this.httpClient.post(
      environment.apiBaseUrl + "assessments",
      formData,
      {
        headers: headers
      });
  }

  public getAllAssessments() {
    const headers = this.sessionService.getHeaders();

    return this.httpClient.get<Assessment[]>(
      environment.apiBaseUrl + "assessments",
      {
        headers: headers
      });
  }

  public getOneResult(id: number) {
      const headers = this.sessionService.getHeaders();

      return this.httpClient.get<AssessmentResult>(
          environment.apiBaseUrl + "assessments/" + id + "/result",
          { headers: headers }
      );
  }

  public getOneInputVideoUrl(id: number): Observable<SafeUrl> {
      const headers = this.sessionService.getHeaders();
      headers.append('responseType', 'blob');

      // console.log(environment.apiBaseUrl + 'assessments/' + id + '/inputs/video');

      return this.httpClient.get(
          environment.apiBaseUrl + 'assessments/' + id + '/inputs/video',
          { headers: headers, responseType: 'blob' }
      ).pipe(map(blob => {
          console.log("assessmentService: getOneInputVideoUrl: ", blob);
          const url = URL.createObjectURL(blob);
          return this.sanitizer.bypassSecurityTrustUrl(url);
      }));
  }

  public getMyBaseURI(): string {
      return environment.apiBaseUrl + "assessments";
  }
}
