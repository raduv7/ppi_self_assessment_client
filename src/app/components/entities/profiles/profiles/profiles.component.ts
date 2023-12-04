import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {OperationService} from "../../../../utils/services/entities/generics/operation.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {EOperationType} from "../../../../utils/models/enums/e-operation.type";

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  // operations!: Observable<EOperationType[]>;
  // displayedColumns: string[] = ['type', 'name', 'status', 'actions'];
  // dataSource!: MatTableDataSource<Profile>;
  //
  // constructor(
  //   private profileService: ProfileService,
  //   private operationService: OperationService,
  //   private router: Router,
  //   private snackBar: MatSnackBar
  // ) {}
  //
  ngOnInit(): void {
  //   this.getProfiles();
  //   this.operations = this.operationService.getOperations("profile");
  }
  //
  // isAllowed(operationType: EOperationType): Observable<boolean> {
  //   return this.operations.pipe(
  //     map(operationTypesArray => operationTypesArray.includes(operationType) )
  //   );
  // }
  //
  // getProfiles() {
  //   this.profileService.getProfiles().subscribe((data) => {
  //     this.dataSource = new MatTableDataSource<Profile>(data);
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //     this.dataSource.filterPredicate = this.createFilter();
  //   });
  // }
  //
  // createProfile(): void {
  //   this.router.navigate(["/profile-create"]);
  // }
  //
  // modifyProfile(name: string) {
  //   this.router.navigate(['/profile-modify', name]);
  // }
  //
  // removeProfile(name: string) {
  //   this.profileService.removeProfile(name).subscribe((data) => {
  //       console.log(data);
  //       this.getProfiles();
  //     },
  //     error => {
  //       this.router.navigate(["/profile-list"]);
  //       this.snackBar.open('Sir, your operation could not be executed!', 'Close', { duration: 4000 });
  //       console.log(error);
  //     });
  // }
  //
  // detailsProfile(name: string) {
  //   this.router.navigate(['/profile-details', name]);
  // }
  //
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  //
  // createFilter(): (data: any, filter: string) => boolean {
  //   const filterFunction = (data: any, filter: string): boolean => {
  //     const searchTerms = filter.toLowerCase().split(' ');
  //     return this.checkSearchTermsInData(searchTerms, data);
  //   };
  //   return filterFunction;
  // }
  //
  // checkSearchTermsInData(searchTerms: string[], data: any): boolean {
  //   for (const term of searchTerms) {
  //     if (
  //       data.type.toLowerCase().indexOf(term) === -1 &&
  //       data.name.toLowerCase().indexOf(term) === -1 &&
  //       data.status.toLowerCase().indexOf(term) === -1
  //     ) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  //
  // protected readonly EOperationType = EOperationType;
}
