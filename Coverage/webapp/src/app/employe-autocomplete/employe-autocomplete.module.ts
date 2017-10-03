import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EmployeAutocompleteComponent } from './employe-autocomplete.component';
import { UsedMaterialModule } from '../shared/used-material.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    UsedMaterialModule
  ],
  declarations: [
    EmployeAutocompleteComponent
  ],
  exports: [
    EmployeAutocompleteComponent
  ]
})

export class EmployeAutocompleteModule { }
