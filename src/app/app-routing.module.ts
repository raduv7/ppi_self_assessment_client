import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from "./components/authentication/landing-page/landing-page.component";
import {SignInPageComponent} from "./components/authentication/sign-in-page/sign-in-page.component";
import {
  ChangePasswordPageComponent
} from "./components/authentication/change-password-page/change-password-page.component";
import {DashboardComponent} from "./components/authentication/dashboard/dashboard.component";
import {ErrorComponent} from "./components/authentication/error/error.component";
import { sessionGuard} from "./utils/services/session-management/session.guard";
import {AccountsComponent} from "./components/entities/accounts/accounts/accounts.component";
import {PaymentsComponent} from "./components/entities/payments/payments/payments.component";
import {ProfilesComponent} from "./components/entities/profiles/profiles/profiles.component";
import {UsersComponent} from "./components/entities/users/users/users.component";
import {AccountsAddComponent} from "./components/entities/accounts/accounts-add/accounts-add.component";
import {PaymentsAddFileComponent} from "./components/entities/payments/payments-add-file/payments-add-file.component";
import {PaymentsAddComponent} from "./components/entities/payments/payments-add/payments-add.component";
import {ProfilesAddComponent} from "./components/entities/profiles/profiles-add/profiles-add.component";
import {UsersAddComponent} from "./components/entities/users/users-add/users-add.component";


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
    path: 'accounts', pathMatch: 'full',
    component: AccountsComponent,
    data: { title: 'Accounts' },
    canActivate: [sessionGuard],
  },
  {
    path: 'accounts-add', pathMatch: 'full',
    component: AccountsAddComponent,
    data: { title: 'Add Account' },
    canActivate: [sessionGuard],
  },
  {
    path: 'payments', pathMatch: 'full',
    component: PaymentsComponent,
    data: { title: 'Payments' },
    canActivate: [sessionGuard],
  },
  {
    path: 'payments-add', pathMatch: 'full',
    component: PaymentsAddComponent,
    data: { title: 'Add Payment' },
    canActivate: [sessionGuard],
  },
  {
    path: 'payments-add-file', pathMatch: 'full',
    component: PaymentsAddFileComponent,
    data: { title: 'Add Payments File' },
    canActivate: [sessionGuard],
  },
  {
    path: 'profiles', pathMatch: 'full',
    component: ProfilesComponent,
    data: { title: 'Profiles' },
    canActivate: [sessionGuard],
  },
  {
    path: 'profiles', pathMatch: 'full',
    component: ProfilesAddComponent,
    data: { title: 'Add Profile' },
    canActivate: [sessionGuard],
  },
  {
    path: 'users', pathMatch: 'full',
    component: UsersComponent,
    data: { title: 'Users' },
    canActivate: [sessionGuard],
  },
  {
    path: 'users-add', pathMatch: 'full',
    component: UsersAddComponent,
    data: { title: 'Add User' },
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
