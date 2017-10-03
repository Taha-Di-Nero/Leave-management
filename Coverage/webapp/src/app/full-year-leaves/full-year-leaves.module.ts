import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { CalendarModule } from 'angular-calendar';
import { BlockUIModule } from 'ng-block-ui';

import { FullYearLeavesComponent } from './full-year-leaves.component';
import { UsedMaterialModule } from '../shared/used-material.module';
import { EmployeAutocompleteModule } from '../employe-autocomplete/employe-autocomplete.module';


@NgModule({
  declarations: [
    FullYearLeavesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastrModule,
    CalendarModule,
    NgbModule,
    BlockUIModule,
    UsedMaterialModule,
    EmployeAutocompleteModule
  ],
  exports: [
    FullYearLeavesComponent
  ]
})

export class FullYearLeavesModule { }
