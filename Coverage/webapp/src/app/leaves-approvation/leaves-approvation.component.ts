import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { LeaveService } from '../service/leave.service';
import { ApprovationMode, LeaveState, ApprovationExit } from '../shared/enums';
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

  employesleaves: EmployeLeaves[] = new Array<EmployeLeaves>();

  force = false;

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

  approve(confirm: boolean, employeleaves: EmployeLeaves): void {
    if (confirm && this.mode === ApprovationMode.Add) {
      this.updateLeavesPlan(employeleaves.leaves, [], employeleaves, ApprovationExit.Approved);
    } else if (confirm) {
      this.updateLeavesPlan([], employeleaves.leaves, employeleaves, ApprovationExit.Approved);
    }
  }

  getConfirmMsg(approve: boolean, employeleaves: EmployeLeaves): string {
    const requestOp = (this.mode === ApprovationMode.Add) ? ' di aggiungere ' : ' di rimuovere ';
    const op = approve ? 'aprrovare' : 'respingere';
    const endPrefix = (this.mode === ApprovationMode.Add) ? 'al' : 'dal';
    const msg = `Si desidera ${op} la richiesta di ${employeleaves.fullName}${requestOp} i giorni:
    <br/><div class=\"toast-dates\">${employeleaves.leavesIntervals.join(',<br\>')}.</div></br>${endPrefix} piano ferie?`;
    return msg;
  }


  reject(confirm: boolean, employeleaves: EmployeLeaves): void {
    if (confirm && this.mode === ApprovationMode.Add) {
      this.updateLeavesPlan(new Array<FullDayLeave>(), employeleaves.leaves, employeleaves, ApprovationExit.Rejected);
    } else if (confirm) {
      employeleaves.leaves.forEach(l => l.state = LeaveState.ToAdd);
      this.updateLeavesPlan(employeleaves.leaves, [], employeleaves, ApprovationExit.Rejected);
    }
  }

  details(employeleaves: EmployeLeaves): void {
    this.showLeaves.emit(employeleaves);
  }

  private updateLeavesPlan(addedLeaves: FullDayLeave[], removedLeaves: FullDayLeave[],
    employeleaves: EmployeLeaves, approvationExit: ApprovationExit): void {
    this.leaveService.updateLeavesPlan(addedLeaves, removedLeaves, employeleaves.id, approvationExit, employeleaves.force)
      .then(resp => {
        this.details(employeleaves);
        this.approveLeavesSuccess(resp, approvationExit);
      }).catch(error => this.approveLeavesFailure(error));
  }

  approveLeavesSuccess(response: UpdatePlanResponse, approvationExit: ApprovationExit): void {
    let succesMsg = '';
    if (response.savedDates.length > 0 || response.removedDates.length > 0) {
      succesMsg = `La richiesta è stata ${approvationExit === ApprovationExit.Approved ? 'approvata' : 'respinta'} correttamente.`;
    }
    if (!!succesMsg) {
      this.toastr.success(succesMsg, '', this.tostPos);
    }
    if (response.rejectedDates.length > 0) {
      this.toastr.error(
        `Per Assicurare la copertura le seguente date sono state scartate:<br/><div class=\"toast-dates\">${response.rejectedDates.join(',<br\>')}.</div>`, '', this.tostPos);
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
