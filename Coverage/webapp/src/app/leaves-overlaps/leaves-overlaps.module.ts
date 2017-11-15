import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/Common/http';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LeavesOverlapsComponent } from './leaves-overlaps.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbModalModule,
    CalendarModule
  ],
  declarations: [
    LeavesOverlapsComponent
  ],
  exports: [
    LeavesOverlapsComponent
  ]
})
export class LeavesOverlapsModule {}
