import { Component } from '@angular/core';
import {FormFieldType} from "../../../utils/models/form-field.type";
import {AuthenticationMapper} from "../../../utils/services/mappers/authentication-mapper.service";
import {SessionService} from "../../../utils/services/session-management/session.service";
import {SignInDto} from "../../../utils/models/authentication/sign-in-dto.interface";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {
  formTitles: string[] = ['Sign In'];
  formFieldTypes: FormFieldType[] = [
    {
      name: 'username',
      type: 'text',
      value: ''
    },
    {
      name: 'password',
      type: 'password',
      value: ''
    },
  ]

  constructor(
      private sessionService: SessionService,
      private snackBar: MatSnackBar,
  ) {
  }

  onSignIn(completedFormFieldTypes: FormFieldType[]): void {
    try {
      const signInData: SignInDto = AuthenticationMapper.toSignInDto(completedFormFieldTypes);
      this.sessionService.signIn(signInData);
      console.log('Sign in successful');
    }
    catch (error: any) {
      this.snackBar.open(error.message, 'Close', { duration: 4000 });
    }
  }
}
