import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../../environment/environment";
import {SessionService} from "../../../../utils/services/session-management/session.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-payments-add-file',
  templateUrl: './payments-add-file.component.html',
  styleUrls: ['./payments-add-file.component.scss']
})
export class PaymentsAddFileComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private sessionService: SessionService,
    private snackBar: MatSnackBar,
    ) {
    this.form = this.fb.group({
      file: [null]
    });
  }

  ngOnInit(): void {
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({ file: file });
    }
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('file', this.form.get('file')!.value);

    let gotHeaders = this.sessionService.getHeaders();
    let token = gotHeaders.get("token")!;
    let okHeaders = new HttpHeaders({
      'token': token,
      'Content-Type': 'multipart/form-data',
    });

    this.http.post(
      environment.apiBaseUrl + "/payments/files",
      formData,
      {
        headers: okHeaders,
      }
    ).subscribe(
      response => {
        this.snackBar.open('File uploaded successfully!', 'Close', { duration: 4000 });
      },
      error => {
        this.snackBar.open('An error occurred while uploading the file.', 'Close', { duration: 4000 });
      }
    );
  }
}
