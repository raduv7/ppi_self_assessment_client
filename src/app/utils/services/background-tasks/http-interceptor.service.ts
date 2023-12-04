import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import {SessionService} from "../session-management/session.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private sessionService: SessionService,
    ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.isLoading.next(true);

    // const requestWithHeaders = request.clone({
    //   headers: this.sessionService.getHeaders(),
    // });

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        console.log('htttp interceptor --> good response:', event);

        if (event instanceof HttpResponse) {
          this.isLoading.next(false);
        }
      }, (error: any) => {
        console.log('htttp interceptor --> bad response:', error);

        this.isLoading.next(false);

        if(error instanceof HttpErrorResponse) {
          if(error.status === 401) {
            this.router.navigate(["/error-401"]);
          }
          else if(error.status === 403) {
            this.router.navigate(["/error-403"]);
          }
          else if(error.status === 404) {
            this.router.navigate(["/error-404"]);
          }
          else if(error.status === 500) {
            this.router.navigate(["/error-500"]);
          }
        }
      })
    );
  }
}
