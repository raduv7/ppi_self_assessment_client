import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../../utils/services/session-management/session.service";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  public message: string = '';

  private static readonly error_messages: Map<number, string> = new Map<number, string>([
    [401, "Sir, you are forbidden to access this page."],
    [403, "Sir, you are not authorized to access this page."],
    [404, "Sir, the resource you are looking for does not exist."],
  ]);

  constructor(
    private router: Router,
    private sessionService: SessionService,
  ) {
  }

  ngOnInit(): void {
    // this.sessionService.clearToken();

    const errorCodeDigits: string = this.router.url.slice(-3);
    const errorCode: number = parseInt(errorCodeDigits, 10);
    this.message = ErrorComponent.error_messages.get(errorCode) || "Sir, an error has occurred, please sign in again.";
  }

  onSignInClick(event: any): void {
    this.router.navigate(['/sign-in']);
  }
}
