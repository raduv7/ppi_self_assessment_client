import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {AssessService} from "../../../../../utils/services/entities/assess/assess.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-assessment-add-form',
  templateUrl: './assessment-add-form.component.html',
  styleUrls: ['./assessment-add-form.component.scss']
})
export class AssessmentAddFormComponent {
  public audioFile: File | null = null;
  public videoFile: File | null = null;
  public wearableDataFile: File | null = null;

  constructor(
    private router: Router,
    private assessService: AssessService,
    private snackBar: MatSnackBar,
  ) {
  }

  setFile(targetFileName: string, sourceFile: File | null): void {
    switch(targetFileName) {
      case 'audioFile':
        this.audioFile = sourceFile;
        break;
      case 'videoFile':
        this.videoFile = sourceFile;
        break;
      case 'wearableDataFile':
        this.wearableDataFile = sourceFile;
        break;
      default:
        console.warn('Invalid file key:', targetFileName);
    }
  }

  onFileUpload(): void {
    let formData: FormData = new FormData();
    let filesCount: number = this.addFiles(formData, this.audioFile,
      this.videoFile, this.wearableDataFile);

    if (filesCount > 0) {
      this.assessService.createAssessment(formData).subscribe(
        (response: any) => {
          console.log('assessAddFormComponent: onFileUpload: Response:', response);
          this.router.navigate(["/assessment/", response.timestamp], {state: {hasVideo: response.hasVideo, timestamp: response.timestamp}});
        },
        (error: any) => {
          console.error('assessAddFormComponent: onFileUpload: Error:', error);
          this.snackBar.open('Error uploading files', 'Close', { duration: 4000 });
        }
      );
      console.log('assessAddFormComponent: onFileUpload: Files uploaded:', formData);
    }
    else {
      this.snackBar.open('No files provided', 'Close', { duration: 4000 });
    }
  }

  private addFiles(formData: FormData,
                   audioFile: File | null, videoFile: File | null,
                   wearableDataFile: File | null): number {
    let filesCount = 0;
    filesCount = this.addFile(filesCount, formData, "audioFile", audioFile);
    filesCount = this.addFile(filesCount, formData, "videoFile", videoFile);
    filesCount = this.addFile(filesCount, formData, "wearableDataFile", wearableDataFile);
    return filesCount;
  }

  private addFile(filesCount: number, formData: FormData, fileType: string, file: File | null): number {
    if(!file) {
      return filesCount;
    }

    formData.append(fileType, file, file.name);
    console.log('assessAddFormComponent: addFile: File added:', file);
    formData.forEach((value, key) => {
      console.log('assessAddFormComponent: addFile: FormData:', key, value);
    });
    console.log('assessAddFormComponent: addFile: All files after addition:', formData);
    return filesCount + 1;
  }
}
