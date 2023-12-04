import { Component } from '@angular/core';
import {FormFieldType} from "../../../utils/models/form-field.type";
import {AuthenticationMapper} from "../../../utils/services/mappers/authentication-mapper.service";
import {ChangePasswordDto} from "../../../utils/models/authentication/change-password-dto.interface";
import {SessionService} from "../../../utils/services/session-management/session.service";

@Component({
  selector: 'app-change-password-page',
  templateUrl: './change-password-page.component.html',
  styleUrls: ['./change-password-page.component.scss']
})
export class ChangePasswordPageComponent {
  formTitles: string[] = ['Change', 'Password'];
  formFieldTypes: FormFieldType[] = [
    {
      name: 'old password',
      type: 'password',
      value: ''
    },
    {
      name: 'new password',
      type: 'password',
      value: ''
    },
    {
      name: 'new password',
      type: 'password',
      value: ''
    },
  ]

  constructor(
      private sessionService: SessionService,
  ) {
  }

  onChangePassword(completedFormFieldTypes: FormFieldType[]): void {
    const changePasswordDto: ChangePasswordDto = AuthenticationMapper.toChangePasswordDto(completedFormFieldTypes);
    this.sessionService.changePassword(changePasswordDto);
  }
}
