import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SessionService} from "../../session-management/session.service";
import {environment} from "../../../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class AssessService {

  constructor(
    private httpClient: HttpClient,
    private sessionService: SessionService,
  ) { }

  public assess(formData: FormData): void {
    console.log(formData);

    const headers = this.sessionService.getHeaders();
    headers.delete('Content-Type'); // Remove Content-Type if it exists

    this.httpClient.post(
      environment.apiBaseUrl + "assessment",
      formData,
      {
        headers: headers
      })
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
}
