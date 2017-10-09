import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { LeaveService } from '../service/leave.service';
import { ApprovationMode, LeaveState } from '../shared/enums';
import { EmployeLeaves } from '../shared/dto/employe-leaves';
import { FullDayLeave } from '../shared/dto/leave';
import { UpdatePlanResponse } from '../shared/dto/update-plan-response';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-leaves-approvation',
  templateUrl: './leaves-approvation.component.html',
  styleUrls: ['./leaves-approvation.component.css']
})

export class LeavesApprovationComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  @Input() mode: ApprovationMode;

  @Output() showLeaves = new EventEmitter<EmployeLeaves>();

  private employesleaves: EmployeLeaves[] = new Array<EmployeLeaves>();

  private tostPos = { positionClass: 'toast-top-center' };

  constructor(private leaveService: LeaveService, private toastr: ToastrService, private ref: ChangeDetectorRef, private sanitizer: DomSanitizer) {
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

  approve(employeleaves: EmployeLeaves): void {
    if (this.mode === ApprovationMode.Add) {
      this.approveLeaves(employeleaves.leaves, [], employeleaves.id);
    } else {
      this.approveLeaves([], employeleaves.leaves, employeleaves.id);
    }
  }

  reject(employeleaves: EmployeLeaves): void {
    if (this.mode === ApprovationMode.Add) {
      this.approveLeaves(new Array<FullDayLeave>(), employeleaves.leaves, employeleaves.id);
    } else {
      employeleaves.leaves.forEach(l => l.state = LeaveState.ToAdd);
      this.approveLeaves(employeleaves.leaves, [], employeleaves.id);
    }
  }

  details(employeleaves: EmployeLeaves): void {
    this.showLeaves.emit(employeleaves);
  }

  private approveLeaves(addedLeaves: FullDayLeave[], removedLeaves: FullDayLeave[], employeId: number): void {
    this.leaveService.updateLeavesPlan(addedLeaves, removedLeaves, employeId)
      .then(resp => this.approveLeavesSuccess(resp))
      .catch(error => this.approveLeavesFailure(error));
  }

  approveLeavesSuccess(response: UpdatePlanResponse): void {
    const lineBreak = (response.savedDates.length > 0 && response.removedDates.length > 0) ? '<br/>' : '';
    let succesMsg = response.savedDates.length > 0 ?
      `le seguente date sono state aggiunte correttamente:<br/><div class=\"toast-dates\">${response.savedDates.join(',<br\>')}.</div>${lineBreak}` : '';
    succesMsg += response.removedDates.length > 0 ?
      `le seguente date sono state rimosse correttamente:<br/><div class=\"toast-dates\">${response.removedDates.join(',<br\>')}.</div>` : '';
    if (!!succesMsg) {
      this.toastr.success(succesMsg);
    }
    if (response.rejectedDates.length > 0) {
      this.toastr.error(
        `Per Assicurare la copertura le seguente date sono state scartate:<br/><div class=\"toast-dates\">${response.rejectedDates.join(',<br\>')}.</div>`, '');
    }
    this.fetchLeaves();
  }

  approveLeavesFailure(error: any): void {
    this.toastr.error('Errore Generico: Le modifiche apportate non sono state salvate.', '', this.tostPos);
    this.fetchLeaves();
  }

  private getCurrentLeaveState(): LeaveState {
    return this.mode === ApprovationMode.Add ? LeaveState.ToAdd : LeaveState.ToRemove;
  }

  private getTitleValue(leavesNumber: number): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(` <span>Giorni da approvare&nbsp;</span>
    <span class="badge rounded app-badge">${leavesNumber}</span>`);
  }

  private stopBlockUI(): void {
    this.blockUI.stop();
    this.ref.markForCheck();
  }
}
