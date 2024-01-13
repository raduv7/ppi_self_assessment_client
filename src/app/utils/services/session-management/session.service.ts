import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Observer, of, Subject} from "rxjs";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {jwtDecode} from 'jwt-decode';
import {environment} from "../../../../environment/environment";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SignInDto} from "../../models/authentication/sign-in-dto.interface";
import {ChangePasswordDto} from "../../models/authentication/change-password-dto.interface";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private existsToken: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private token: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private internalToken: string | null = null;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
  ) {
    this.token.next(localStorage.getItem('token'));
    this.token.subscribe((tokenVal: string | null) => {
      this.existsToken.next(!!tokenVal);
    });
  }

  isAuthenticated(): Observable<boolean> {
    this.internalUpdateToken();
    return this.existsToken.asObservable();
  }
  isAuthenticatedValue(): boolean {
    this.internalUpdateToken();
    return this.existsToken.getValue();
  }

  getHeaders(): HttpHeaders {
    if(this.isAuthenticated()) {
      return new HttpHeaders({
        // 'Content-Type': 'application/json',
        token: this.internalToken || '',
      });
    }
    else {
      return new HttpHeaders({
        'Content-Type': 'application/json',
      });
    }
  }

  signIn(signInData: SignInDto): void {
    this.httpClient.post(
      environment.apiBaseUrl + 'authentication_management/sign_in',
        signInData,
      {
        headers: this.getHeaders(),
        observe: 'response',
        responseType: 'text',
      }
    ).subscribe(
        (response: HttpResponse<string>) => {

          if (response.status === 202) {
            console.log("Session service --> got a 202 response");
            console.log("Session service --> token: " + response.body);

            this.updateToken(response.body ? response.body : "");
            this.snackBar.open('Sir, your account was just created. ' +
              'You have to change your password.', 'Close', { duration: 7000 });
            this.router.navigate(['/change-password']);
          }
          else {
            console.log("Session service --> got a good response response, not 202: " + response);

            this.updateToken(response.body ? response.body : "");

            // todo: get the current user's roles from backend

            this.router.navigate(['/dashboard']);
          }

        },
        (error: any) => {
          this.snackBar.open('Sir, invalid username or password', 'Close', { duration: 4000 });
        }
    );
  }

  changePassword(changePasswordData: ChangePasswordDto): void {
    this.httpClient.put(
      environment.apiBaseUrl + `authentication_management/${ this.getUsername() }/password`,
        changePasswordData,
        {
          headers: this.getHeaders(),
          observe: 'response',
          responseType: 'text'
        }
        ).subscribe(
        (response: any) => {
          this.updateToken(response);

          this.snackBar.open('Sir, password changed successfully.', 'Close', { duration: 4000 });
          this.router.navigate(['/dashboard']);
        },
        (error: any) => {
          this.snackBar.open('Sir, your input was invalid.', 'Close', { duration: 4000 });
          console.error('Error changing password', error.message ? error.message : error);
        }
    );
  }

  signOut(): void {
    this.clearToken();
  }

  getUsername(): string {
    return localStorage.getItem('username') || '';
  }

  updateToken(token: string): void {
    localStorage.setItem('token', token);
    this.internalUpdateToken();
  }

  clearToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.internalUpdateToken();
  }

  private internalUpdateToken(): void {
    if(this.internalToken !== localStorage.getItem('token')) {
      this.internalToken = localStorage.getItem('token');
      this.token.next(this.internalToken);

      if(!!this.internalToken) {
        const jwtToken: string = this.internalToken;
        if (jwtToken) {
          const decodedToken: any = jwtDecode(jwtToken);
          const expirationDate: Date = new Date(0);
          expirationDate.setUTCSeconds(decodedToken.exp);

          const username: string = decodedToken?.sub || '';
          localStorage.setItem('username', username);

          if (expirationDate < new Date()) {
            this.clearToken();
          }
        }
      }
      else {
        localStorage.removeItem("username");
      }
    }
  }
}
