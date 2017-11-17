import {
    AfterViewInit,
    ApplicationInitStatus,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ViewChild,
} from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { DAYS_OF_WEEK } from 'calendar-utils/dist/calendar-utils';
import { CalendarDateFormatter, CalendarMonthViewDay } from 'angular-calendar';
import { isToday, isSameDay, eachDay, startOfMonth, startOfWeek, startOfDay, endOfMonth, endOfWeek, endOfDay, format } from 'date-fns';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrService } from 'ngx-toastr';

import { CustomDateFormatter } from '../shared/custom-date-formatter.provider';
import { Utils } from '../shared/utils';
import { LeaveService } from '../service/leave.service';
import { FullDayLeave } from '../shared/dto/leave';
import { ApplicationSharedData } from '../shared/application-shared-data';
import { Employe } from '../shared/dto/employe';
import { EmployeState, Profile, LeaveState } from '../shared/enums';
import { UpdatePlanResponse } from '../shared/dto/update-plan-response';
import { EmployeAutocompleteComponent } from '../employe-autocomplete/employe-autocomplete.component';
import { CoverageService } from '../service/coverage.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-full-year-leaves',
  templateUrl: './full-year-leaves.component.html',
  styleUrls: ['./full-year-leaves.component.css'],
  providers: [{
    provide: CalendarDateFormatter,
    useClass: CustomDateFormatter
  }],
})
export class FullYearLeavesComponent implements AfterViewInit {

  @ViewChild('employeAutocomplete') employeAutocomplete: EmployeAutocompleteComponent;

  @BlockUI() blockUI: NgBlockUI;

  Profile = Profile;
  ApplicationSharedData = ApplicationSharedData;

  view = 'month';

  currentYear = ApplicationSharedData.getInstance().currentYear;
  viewDate: Date[] = this.getYearMonths();

  yearAllDay: CalendarMonthViewDay[] = [];
  leavesDates: FullDayLeave[] = new Array<FullDayLeave>();
  lastEnteredLeave: Date;

  refresh: Subject<any> = new Subject();

  excludeDays: number[] = [0, 6];
  locale = 'it';
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [
    DAYS_OF_WEEK.SATURDAY,
    DAYS_OF_WEEK.SUNDAY
  ];

  constructor(private leaveService: LeaveService, private coverageService: CoverageService,
    private toastr: ToastrService, private ref: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.fetchLeaves();
  }

  private fetchLeaves(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];

    this.blockUI.start('Attendere prego...');
    this.leaveService.getLeaves(format(getStart(this.viewDate[0]), 'DD-MM-YYYY'),
      format(getEnd(this.viewDate[11]), 'DD-MM-YYYY'), this.getSelectedEmployeId())
      .then(leaves => {
        this.updateEmployeLeavesNumber(leaves.filter(l => l.state === LeaveState.Approved).length);
        this.setLeaves(leaves);
        this.stopBlockUI();
      })
      .catch(error => this.stopBlockUI());
  }

  updateEmployeLeavesNumber(leavesNumber: number): void {
    let employeId = this.getSelectedEmployeId();
    employeId = employeId ? employeId : ApplicationSharedData.getInstance().loggedEmploye.id;
    let employe = ApplicationSharedData.getInstance().loggedEmploye;
    employe = (this.employeAutocomplete && this.employeAutocomplete.employes.length > 0) ?
      this.employeAutocomplete.employes.find(e => e.id === employeId) : employe;
    employe.currentYearLeaves = leavesNumber;

  }

  private setLeaves(leaves: FullDayLeave[]): void {
    this.leavesDates = new Array<FullDayLeave>();
    leaves.forEach(l => this.leavesDates.push(l));
    this.refresh.next();
  }

  private getYearMonths(): Date[] {
    const yearMonths: Date[] = new Array<Date>();
    for (let i = 0; i < 12; i++) {
      yearMonths.push(new Date(this.currentYear, i, 1));
    }
    return yearMonths;
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      this.setDayCss(day);
      if (day.inMonth) {
        const dayIndex = this.yearAllDay.findIndex(d => isSameDay(d.date, day.date));
        if (dayIndex > -1) {
          this.yearAllDay[dayIndex] = day;
        } else {
          this.yearAllDay.push(day);
        }
      }
    });
  }

  dayClicked(event: MouseEvent, day: CalendarMonthViewDay): void {
    if (day.inMonth && !Utils.isHolidayDay(day.date)) {
      let initLeaves = new Date(day.date);
      let endLeaves = event.shiftKey && this.lastEnteredLeave ? new Date(this.lastEnteredLeave) : initLeaves;
      let isSecondShift = false;

      if (initLeaves > endLeaves) {
        const tmp = endLeaves;
        endLeaves = initLeaves;
        initLeaves = tmp;
      }
      if (!this.lastEnteredLeave && event.shiftKey) {
        this.lastEnteredLeave = new Date(day.date);
        day.cssClass = 'cal-cell-top cal-cell-leave-period';
        return;
      } else if (event.shiftKey) {
        isSecondShift = true;
      }

      this.lastEnteredLeave = undefined;

      this.addRemoveLeaves(initLeaves, endLeaves, isSecondShift);
    }
  }

  private addRemoveLeaves(initLeaves: Date, endLeaves: Date, isSecondShift: boolean): void {
    const leavesDays: Date[] = eachDay(initLeaves, endLeaves);
    const addedLeaves: FullDayLeave[] = [];
    const removedLeaves: FullDayLeave[] = [];
    for (let i = 0; i < leavesDays.length; i++) {
      const leavesDay = this.yearAllDay.find(d => isSameDay(d.date, leavesDays[i]));
      if (leavesDay && leavesDay.inMonth && !Utils.isHolidayDay(leavesDay.date)) {
        const index = this.leavesDates.findIndex(leave => isSameDay(leave.date, leavesDay.date));
        if (index > -1) {
          leavesDay.cssClass = 'cal-cell-top cal-cell-normal';
          removedLeaves.push(this.leavesDates[index]);
        } else {
          leavesDay.cssClass = 'cal-cell-top cal-cell-leave-period';
          const leave = new FullDayLeave();
          leave.date = leavesDay.date;
          addedLeaves.push(leave);
        }
      }
    }
    this.updateLeaves(addedLeaves, removedLeaves);
  }

  private updateLeaves(addedLeaves: FullDayLeave[], removedLeaves: FullDayLeave[]): void {
    this.leaveService.updateLeavesPlan(addedLeaves, removedLeaves, this.getSelectedEmployeId())
      .then(resp => this.updateLeavesPlanResponse(resp))
      .catch(error => this.updateLeavesPlanFailure(error));
  }

  private setDayCss(day: CalendarMonthViewDay) {
    const leave = this.leavesDates.find(l => isSameDay(l.date, day.date));
    day.cssClass = 'cal-cell-top';
    if (Utils.isHolidayDay(day.date)) {
      day.cssClass += ' cal-cell-normal-holiday';
    } else if (!!leave && day.inMonth) {
      day.cssClass += this.getLeaveCellClass(leave);
    } else {
      day.cssClass += ' cal-cell-normal';
    }
    this.setTodayCss(day);
    day.isToday = false;
  }

  private getLeaveCellClass(leave: FullDayLeave): string {
    switch (leave.state) {
      case LeaveState.Approved:
        return ' cal-cell-approved-leave';
      case LeaveState.ToAdd:
        return ' cal-cell-added-leave';
      case LeaveState.ToRemove:
        return ' cal-cell-removed-leave';
    }
  }

  private setTodayCss(day: CalendarMonthViewDay): void {
    if (isToday(day.date) && day.inMonth) {
      day.cssClass += (day.cssClass.endsWith('cal-cell-normal')) ? ' cal-cell-today-year' : ' cal-cell-today-year-is-leave';
    }
  }

  nextYear() {
    this.currentYear++;
    ApplicationSharedData.getInstance().currentYear++;
    this.viewDate = this.getYearMonths();
    this.fetchLeaves();
  }
  previousYear() {
    this.currentYear--;
    ApplicationSharedData.getInstance().currentYear--;
    this.viewDate = this.getYearMonths();
    this.fetchLeaves();
  }

  updateLeavesPlanResponse(response: UpdatePlanResponse): void {
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

  updateLeavesPlanFailure(error: any): void {
    this.toastr.error('Errore Generico: Le modifiche apportate non sono state salvate.');
    this.fetchLeaves();
  }

  private getSelectedEmployeId(): number {
    const employe = this.employeAutocomplete ? this.employeAutocomplete.getselectedEmploye() : undefined;
    return employe ? employe.id : undefined;
  }

  private stopBlockUI(): void {
    this.blockUI.stop();
    this.ref.markForCheck();
  }
}
