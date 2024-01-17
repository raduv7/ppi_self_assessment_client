import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NgxChartsModule } from "@swimlane/ngx-charts";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpInterceptorService } from './utils/services/background-tasks/http-interceptor.service';
import { SpinnerComponent } from './components/-generics/spinner/spinner.component';
import { LandingPageComponent } from './components/authentication/landing-page/landing-page.component';
import { BatmanButtonComponent } from './components/-generics/authentication/batman-button/batman-button.component';
import { SignInPageComponent } from './components/authentication/sign-in-page/sign-in-page.component';
import { AuthFormComponent } from './components/-generics/authentication/auth-form/auth-form.component';
import { AuthFormSubmitButtonComponent } from './components/-generics/authentication/auth-form/auth-form-submit-button/auth-form-submit-button.component';
import { AuthFormAbstractFieldComponent } from './components/-generics/authentication/auth-form/auth-form-abstract-field/auth-form-abstract-field.component';
import { ChangePasswordPageComponent } from './components/authentication/change-password-page/change-password-page.component';
import { HeaderComponent } from './components/-layout/header/header.component';
import { HeaderMenuButtonComponent } from './components/-layout/header/header-menu-button/header-menu-button.component';
import { HeaderTitleComponent } from './components/-layout/header/header-title/header-title.component';
import { HeaderDashboardButtonComponent } from './components/-layout/header/header-dashboard-button/header-dashboard-button.component';
import { HeaderSignOutButtonComponent } from './components/-layout/header/header-sign-out-button/header-sign-out-button.component';
import { DashboardComponent } from './components/authentication/dashboard/dashboard.component';
import { ErrorComponent } from './components/authentication/error/error.component';
import { MagicTextComponent } from './components/authentication/dashboard/magic-text/magic-text.component';
import { ChangePasswordButtonComponent } from './components/authentication/dashboard/change-password-button/change-password-button.component';
import { MenuComponent } from './components/-layout/menu/menu.component';
import { MenuEntryComponent } from './components/-layout/menu/menu-entry/menu-entry.component';
import { AddButtonComponent } from './components/-generics/entities/entities/add-button/add-button.component';
import { ChangeFileButtonComponent } from './components/authentication/dashboard/change-file-button/change-file-button.component';
import { UploadButtonComponent } from './components/authentication/dashboard/upload-button/upload-button.component';
import { AssessmentsListComponent } from './components/entity/asseessment/assessments-list/assessments-list.component';
import { AssessmentComponent } from './components/entity/asseessment/assessment/assessment.component';
import { AssessmentAddComponent } from './components/entity/asseessment/assessment-add/assessment-add.component';
import {ProfilesComponent} from "./components/entity/profile/profiles/profiles.component";
import {ProfilesAddComponent} from "./components/entity/profile/profiles-add/profiles-add.component";
import { AssessmentChartComponent } from './components/entity/asseessment/assessment/assessment-chart/assessment-chart.component';
import { AssessmentAddFormComponent } from './components/entity/asseessment/assessment-add/assessment-add-form/assessment-add-form.component';
import { AssessmentAddFormFileFieldComponent } from './components/entity/asseessment/assessment-add/assessment-add-form/assessment-add-form-file-field/assessment-add-form-file-field.component';
import { AssessmentsListEntryComponent } from './components/entity/asseessment/assessments-list/assessments-list-entry/assessments-list-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LandingPageComponent,
    BatmanButtonComponent,
    SignInPageComponent,
    AuthFormComponent,
    AuthFormSubmitButtonComponent,
    AuthFormAbstractFieldComponent,
    ChangePasswordPageComponent,
    HeaderComponent,
    HeaderMenuButtonComponent,
    HeaderTitleComponent,
    HeaderDashboardButtonComponent,
    HeaderSignOutButtonComponent,
    DashboardComponent,
    ErrorComponent,
    MagicTextComponent,
    ChangePasswordButtonComponent,
    MenuComponent,
    MenuEntryComponent,
    AddButtonComponent,
    ChangeFileButtonComponent,
    UploadButtonComponent,
    AssessmentsListComponent,
    AssessmentComponent,
    AssessmentAddComponent,
    ProfilesComponent,
    ProfilesAddComponent,
    AssessmentChartComponent,
    AssessmentAddFormComponent,
    AssessmentAddFormFileFieldComponent,
    AssessmentsListEntryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgxChartsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
