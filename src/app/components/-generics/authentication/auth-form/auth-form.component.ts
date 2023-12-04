import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormFieldType} from "../../../../utils/models/form-field.type";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  @Input() titles!: string[];
  @Input() fieldTypes!: FormFieldType[];
  @Output() submitEventEmitter: EventEmitter<FormFieldType[]> = new EventEmitter<FormFieldType[]>();

  updateFieldType(index: number, updatedField: FormFieldType): void {
    const radu = this.fieldTypes.length;
    this.fieldTypes[index] = updatedField;
  }

  onSubmit(): void {
    this.submitEventEmitter.emit(this.fieldTypes);
  }
}
