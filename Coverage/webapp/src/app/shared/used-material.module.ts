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
  MatTableModule
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
    MatChipsModule
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
    MatChipsModule
  ]
})
export class UsedMaterialModule { }
