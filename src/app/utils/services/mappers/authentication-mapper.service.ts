import { Injectable } from '@angular/core';
import {FormFieldType} from "../../models/form-field.type";
import {SignInDto} from "../../models/authentication/sign-in-dto.interface";
import {ChangePasswordDto} from "../../models/authentication/change-password-dto.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationMapper {
  static toSignInDto(formFieldTypes: FormFieldType[]): SignInDto {
    let signInDto: SignInDto = { username: '', password: '' };

    formFieldTypes.forEach(field => {
      if (field.name === 'username') {
        signInDto.username = field.value;
      } else if (field.name === 'password') {
        signInDto.password = field.value;
      }
    });

    if (!signInDto.username || !signInDto.password) {
      throw new Error('Sir, username or password is invalid.');
    }

    return signInDto;
  }

  static toChangePasswordDto(formFieldTypes: FormFieldType[]): ChangePasswordDto {
    let changePasswordDto: ChangePasswordDto = { oldPassword: '', newPassword: '' };
    let newPasswords: string[] = [];

    formFieldTypes.forEach(field => {
      if (field.name === 'old password') {
        changePasswordDto.oldPassword = field.value;
      } else if (field.name === 'new password') {
        newPasswords.push(field.value);
      }
    });

    if (newPasswords.length !== 2) {
      throw new Error('Sir, the new password fields cannot be empty.');
    }
    if (newPasswords[0] !== newPasswords[1]) {
      throw new Error('Sir, the new password fields do not match.');
    }
    if (!changePasswordDto.oldPassword || !newPasswords[0]) {
      throw new Error('Sir, required fields are missing.');
    }

    changePasswordDto.newPassword = newPasswords[0];

    return changePasswordDto;
  }
}
