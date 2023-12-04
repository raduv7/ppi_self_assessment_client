import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormFieldType} from "../../../../../utils/models/form-field.type";

@Component({
  selector: 'app-auth-form-abstract-field',
  templateUrl: './auth-form-abstract-field.component.html',
  styleUrls: ['./auth-form-abstract-field.component.scss']
})
export class AuthFormAbstractFieldComponent {
  @Input()
  set type(val: FormFieldType) {
    this._type = val;
    this.typeChange.emit(this._type);
  }

  get type(): FormFieldType {
    return this._type;
  }

  @Output() typeChange: EventEmitter<FormFieldType> = new EventEmitter<FormFieldType>();

  private _type: FormFieldType = {
    name: '',
    type: 'text',
    value: ''
  };
}
