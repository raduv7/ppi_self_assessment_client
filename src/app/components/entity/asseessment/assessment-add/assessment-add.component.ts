import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../../../utils/services/session-management/session.service";
import {AssessService} from "../../../../utils/services/entities/assess/assess.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-assessment-add',
  templateUrl: './assessment-add.component.html',
  styleUrls: ['./assessment-add.component.scss']
})
export class AssessmentAddComponent {
  // selectedFile: File | null = null;
  //
  // constructor(
  //   private router: Router,
  //   private sessionService: SessionService,
  //   private assessService: AssessService,
  //   private snackBar: MatSnackBar,
  // ) { }
  //
  //
  // onFileSelected(event: any): void {
  //   this.selectedFile = event.target.files[0];
  // }
  //
  // onFileUpload(): void {
  //   if (this.selectedFile) {
  //     const formData = new FormData();
  //     formData.append('file', this.selectedFile, this.selectedFile.name);
  //
  //     this.assessService.assess(formData);
  //     console.log('File uploaded:', this.selectedFile.name);
  //   }
  //   else {
  //     this.snackBar.open('No file selected', 'Close', { duration: 4000 });
  //   }
  // }
}
