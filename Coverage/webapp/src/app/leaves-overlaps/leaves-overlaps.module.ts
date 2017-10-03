import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LeavesOverlapsComponent } from './leaves-overlaps.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
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
