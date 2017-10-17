import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalendarModule } from 'angular-calendar';

import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LeavesTabSetModule } from '../leaves-tab-set/leave-tab-set.module';
import { FullYearLeavesOverlapsComponent } from './full-year-leaves-overlaps.component';
import { FlexibilityPieModule } from '../dashboard/flexibility-pie/flexibility-pie.module';
import { YearsCoverageModule } from '../dashboard/years-coverage/years-coverage.module';
import { UsedMaterialModule } from '../shared/used-material.module';


@NgModule({
  declarations: [
    FullYearLeavesOverlapsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule,
    NgbModalModule,
    CalendarModule,
    UsedMaterialModule,
    FlexibilityPieModule,
    YearsCoverageModule,
    LeavesTabSetModule
  ],
  exports: [
    FullYearLeavesOverlapsComponent
  ],
  entryComponents: [FullYearLeavesOverlapsComponent]
})

export class FullYearLeavesOverlapsModule { }
