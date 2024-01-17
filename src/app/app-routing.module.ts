import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from "./components/authentication/landing-page/landing-page.component";
import {SignInPageComponent} from "./components/authentication/sign-in-page/sign-in-page.component";
import {ChangePasswordPageComponent} from "./components/authentication/change-password-page/change-password-page.component";
import {DashboardComponent} from "./components/authentication/dashboard/dashboard.component";
import {ErrorComponent} from "./components/authentication/error/error.component";
import { sessionGuard } from "./utils/services/session-management/session.guard";
import {ProfilesComponent} from "./components/entity/profile/profiles/profiles.component";
import {ProfilesAddComponent} from "./components/entity/profile/profiles-add/profiles-add.component";
import {AssessmentComponent} from "./components/entity/asseessment/assessment/assessment.component";
import {AssessmentAddComponent} from "./components/entity/asseessment/assessment-add/assessment-add.component";
import {AssessmentsListComponent} from "./components/entity/asseessment/assessments-list/assessments-list.component";


const routes: Routes = [
  {
    path: '', pathMatch: 'full',
    component: LandingPageComponent,
    data: { title: 'Welcome, sir!' },
    canActivate: [sessionGuard],
  },
  {
    path: 'sign-in',
    component: SignInPageComponent,
    data: { title: 'Sign In' },
    canActivate: [sessionGuard],
  },
  {
    path: 'change-password',
    component: ChangePasswordPageComponent,
    data: { title: 'Change Password' },
    canActivate: [sessionGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' },
    canActivate: [sessionGuard],
  },
  {
    path: 'assessment/:assessmentId',
    component: AssessmentComponent,
    data: { title: 'Assessments' },
    canActivate: [sessionGuard],
  },
  {
    path: 'assessments-list',
    component: AssessmentsListComponent,
    data: { title: 'Assessments' },
    canActivate: [sessionGuard],
  },
  {
    path: 'assessment-add',
    component: AssessmentAddComponent,
    data: { title: 'Add Assessment' },
    canActivate: [sessionGuard],
  },
  {
    path: 'profile',
    component: ProfilesComponent,
    data: { title: 'Profiles' },
    canActivate: [sessionGuard],
  },
  {
    path: 'profile', pathMatch: 'full',
    component: ProfilesAddComponent,
    data: { title: 'Add Profile' },
    canActivate: [sessionGuard],
  },
  {
    path: 'error-401',
    component: ErrorComponent,
    data: { title: 'Unauthorized Access' },
    canActivate: [sessionGuard],
  },
  {
    path: 'error-403',
    component: ErrorComponent,
    data: { title: 'Forbidden Access' },
    canActivate: [sessionGuard],
  },
  {
    path: 'error-404',
    component: ErrorComponent,
    data: { title: 'Page Not Found' },
    canActivate: [sessionGuard],
  },
  {
    path: '**',
    redirectTo: 'error-404',
    data: { title: 'Redirecting...' }  // not really needed, but added for consistency
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
