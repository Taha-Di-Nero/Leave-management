import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LeavesOverlapsModule } from '../leaves-overlaps/leaves-overlaps.module';
import { LeaveTabSetComponent } from './leave-tab-set.component';

@NgModule({
  declarations: [
    LeaveTabSetComponent
  ],
  imports: [
    NgbModule,
    LeavesOverlapsModule
  ],
  exports: [
    LeaveTabSetComponent
  ]
})

export class LeavesTabSetModule { }
