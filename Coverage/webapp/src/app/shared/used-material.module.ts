import { NgModule } from '@angular/core';
import {
  MdCardModule,
  MdIconModule,
  MdButtonModule,
  MdToolbarModule,
  MdAutocompleteModule,
  MdFormFieldModule,
  MdInputModule,
  MdSidenavModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdListModule,
  MdChipsModule,
  MdSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MdSidenavModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,
    MdToolbarModule,
    MdAutocompleteModule,
    MdFormFieldModule,
    MdInputModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdListModule,
    MdSelectModule,
    MdChipsModule
  ],
  exports: [
    MdSidenavModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,
    MdToolbarModule,
    MdAutocompleteModule,
    MdFormFieldModule,
    MdInputModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdListModule,
    MdSelectModule,
    MdChipsModule
  ]
})
export class UsedMaterialModule { }
