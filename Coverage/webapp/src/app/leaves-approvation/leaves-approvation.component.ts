import { ChangeDetectionStrategy, Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { LeaveService } from '../service/leave.service';
import { ApprovationMode, LeaveState } from '../shared/enums';
import { EmployeLeaves } from '../shared/dto/employe-leaves';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-leaves-approvation',
  templateUrl: './leaves-approvation.component.html',
  styleUrls: ['./leaves-approvation.component.css']
})

export class LeavesApprovationComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  @Input() mode: ApprovationMode;

  employesleaves: EmployeLeaves[] = new Array<EmployeLeaves>();

  constructor(private leaveService: LeaveService, private toastr: ToastrService, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.fetchLeaves();
  }

  private fetchLeaves(): void {

    this.blockUI.start('Attendere prego...');
    this.leaveService.getLeavesByState(this.getCurrentLeaveState()).then(leaves => {
      this.setLeaves(leaves);
      this.stopBlockUI();
    }).catch(error => this.stopBlockUI());
  }

  private setLeaves(leaves: EmployeLeaves[]): void {
    this.employesleaves = new Array<EmployeLeaves>();
    leaves.forEach(l => this.employesleaves.push(l));
    this.ref.markForCheck();
  }

  update(): void {
  }

  delete(): void {
  }

  private getCurrentLeaveState(): LeaveState {
    return this.mode === ApprovationMode.Add ? LeaveState.ToAdd : LeaveState.ToRemove;
  }

  private stopBlockUI(): void {
    this.blockUI.stop();
    this.ref.markForCheck();
  }
}
