import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    HttpClientModule,
    HttpModule,
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
  ],
providers: [
  HttpClient
]
})
export class UsedMaterialModule { }
