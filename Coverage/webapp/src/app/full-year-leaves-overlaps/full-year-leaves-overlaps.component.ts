import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DAYS_OF_WEEK, CalendarEvent } from 'calendar-utils/dist/calendar-utils';
import {
  startOfDay,
  endOfDay,
  endOfMonth,
  isSameDay,
  isSameMonth,
  startOfMonth,
  format,
  startOfWeek,
  endOfWeek
} from 'date-fns';
import { Subject } from 'rxjs/Subject';

import { ViewMode } from '../shared/enums';
import { CoverageService } from '../service/coverage.service';
import { CustomDateFormatter } from '../shared/custom-date-formatter.provider';
import { CalendarDateFormatter, CalendarMonthViewDay } from 'angular-calendar';
import { ApplicationSharedData } from '../shared/application-shared-data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-full-year-leaves-overlaps',
  templateUrl: './full-year-leaves-overlaps.component.html',
  styleUrls: ['./full-year-leaves-overlaps.component.css'],
  providers: [{
    provide: CalendarDateFormatter,
    useClass: CustomDateFormatter
  }],
})
export class FullYearLeavesOverlapsComponent implements OnInit {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  private model: ApplicationSharedData = ApplicationSharedData.getInstance();

  ViewMode = ViewMode;
  view = 'month';

  currentYear: number = this.model.currentYear;
  viewDate: Date[] = this.getYearMonths();

  refresh: Subject<any> = new Subject();

  excludeDays: number[] = [0, 6];
  locale = 'it';
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [
    DAYS_OF_WEEK.SATURDAY,
    DAYS_OF_WEEK.SUNDAY
  ];

  events: CalendarEvent[] = [];

  constructor(private modal: NgbModal, private coverageService: CoverageService) { }

  ngOnInit() {
    this.fetchGaps();
  }

  fetchGaps(): void {

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

    if (this.model.getLoadedYear(this.currentYear)) {
      this.addGaps(this.model.getLoadedYear(this.currentYear), false);
    } else {
      this.coverageService.searchGaps(format(getStart(this.viewDate[0]), 'DD-MM-YYYY'),
        format(getEnd(this.viewDate[11]), 'DD-MM-YYYY'), ViewMode.Area)
        .then(gaps => this.addGaps(gaps));
    }
  }

  addGaps(gaps: CalendarEvent[], cacheGaps = true): void {
    if (cacheGaps) {
      this.model.addLoadedYear(this.currentYear, gaps);
    }
    this.events = gaps;
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
      day.cssClass = 'cal-cell-top';
      if (!day.inMonth) {
        day.events = [];
      } else if (day.events.length > 0) {
        day.cssClass += ' cal-cell-problem';
      } else {
        day.cssClass += ' cal-cell-normal';
      }
      if (day.isToday && day.inMonth) {
        day.cssClass += (day.events.length > 0) ? ' cal-cell-today-year-has-gap' : ' cal-cell-today-year';
      }
      day.isToday = false;
    });
  }

  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {
    if (events.length > 0) {
      this.model.setSelectedDate(date);
      this.modal.open(this.modalContent, { size: 'lg', windowClass: 'animated bounceInUp' });
    }
  }

  nextYear() {
    this.currentYear++;
    this.model.currentYear++;
    this.viewDate = this.getYearMonths();
    this.fetchGaps();
  }
  previousYear() {
    this.currentYear--;
    this.model.currentYear--;
    this.viewDate = this.getYearMonths();
    this.fetchGaps();
  }
}
