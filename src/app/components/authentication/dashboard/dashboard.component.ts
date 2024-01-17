import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../../utils/services/session-management/session.service";
import {Router} from "@angular/router";
import {AssessService} from "../../../utils/services/entities/assess/assess.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  username!: string;
  selectedFile: File | null = null;

  constructor(
      private router: Router,
      private sessionService: SessionService,
      private assessService: AssessService,
      private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.username = this.sessionService.getUsername();
  }

    onChangePasswordButtonClick() {
        this.router.navigate(['/change-password']);
    }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onFileUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);

      this.assessService.createAssessment(formData);
      console.log('File uploaded:', this.selectedFile.name);
    }
    else {
      this.snackBar.open('No file selected', 'Close', { duration: 4000 });
    }
  }
}
