import { Component, ViewChild, TemplateRef, Input, ChangeDetectionStrategy } from '@angular/core';

import { NgbTabChangeEvent, NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { LeavesOverlapsComponent } from '../leaves-overlaps/leaves-overlaps.component';
import { ViewMode } from '../shared/enums';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-leave-tab-set',
  templateUrl: 'leave-tab-set.html',
})
export class LeaveTabSetComponent {

  ViewMode = ViewMode;

  @ViewChild('leaveEmploye') leaveEmploye: LeavesOverlapsComponent;
  @ViewChild('leaveAree') leaveAree: LeavesOverlapsComponent;

}
