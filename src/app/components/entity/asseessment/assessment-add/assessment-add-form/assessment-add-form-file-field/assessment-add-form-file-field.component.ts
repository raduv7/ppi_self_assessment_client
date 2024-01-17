import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-assessment-add-form-file-field',
  templateUrl: './assessment-add-form-file-field.component.html',
  styleUrls: ['./assessment-add-form-file-field.component.scss']
})
export class AssessmentAddFormFileFieldComponent {
  @Input() label!: string;
  @Input() allowedExtensions!: string[];

  @Output() fileEvent: EventEmitter<File | null> = new EventEmitter<File | null>();

  constructor(
    private snackBar: MatSnackBar,
    ) {}

  onFileSelected(event: any): void {
    const newFile = event.target.files[0];

    if(this.allowedExtensions.includes(AssessmentAddFormFileFieldComponent.getFileExtension(newFile.name))) {
      this.fileEvent.emit(event.target.files[0]);
    }
    else {
      this.snackBar.open('Invalid file extension', 'Close', { duration: 4000 });
    }
  }

  private static getFileExtension(filename: string): string {
    return filename.split('.').pop() || '';
  }
}
