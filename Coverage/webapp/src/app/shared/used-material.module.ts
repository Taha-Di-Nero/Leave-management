import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatChipsModule,
  MatSelectModule,
  MatTableModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatChipsModule,
    MatCheckboxModule
  ],
  exports: [
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatChipsModule,
    MatCheckboxModule
  ]
})
export class UsedMaterialModule { }
