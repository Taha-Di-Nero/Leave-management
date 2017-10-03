import { Component, ViewChild, TemplateRef, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
import { CalendarEvent, DAYS_OF_WEEK, CalendarDateFormatter, CalendarMonthViewDay } from 'angular-calendar';

import { AreaCoverageGaps } from '../shared/dto/area-coverage-gaps';
import { CustomDateFormatter } from '../shared/custom-date-formatter.provider';
import { COLORS, ViewMode } from '../shared/enums';
import { CoverageService } from '../service/coverage.service';
import { ApplicationSharedData } from '../shared/application-shared-data';



@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-leaves-overlaps',
  styleUrls: ['leaves-overlaps.component.css'],
  templateUrl: 'leaves-overlaps.component.html',
  providers: [{
    provide: CalendarDateFormatter,
    useClass: CustomDateFormatter
  }],
})
export class LeavesOverlapsComponent implements OnInit {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  modalheaderCss = '';

  ViewMode = ViewMode;
  @Input() mode: ViewMode;

  viewDate: Date = ApplicationSharedData.getInstance().getSelectedDate();

  view = 'month';
  excludeDays: number[] = [0, 6];
  locale = 'it';
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [
    DAYS_OF_WEEK.SATURDAY,
    DAYS_OF_WEEK.SUNDAY
  ];

  modalData: {
    event: CalendarEvent
  };

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen = true;

  constructor(private modal: NgbModal, private coverageService: CoverageService) { }

  ngOnInit(): void {
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

    if (ApplicationSharedData.getInstance().getLoadedMonth(this.mode, this.viewDate)) {
      this.addGaps(ApplicationSharedData.getInstance().getLoadedMonth(this.mode, this.viewDate), false);
    } else {
      this.coverageService.searchGaps(format(getStart(this.viewDate), 'DD-MM-YYYY'),
        format(getEnd(this.viewDate), 'DD-MM-YYYY'), this.mode)
        .then(gaps => this.addGaps(gaps));
    }
  }

  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {

    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  handleEvent(event: CalendarEvent): void {
    this.modalData = { event };
    this.modalheaderCss = event.color === COLORS.red ? 'modal-header modal-header-red' : 'modal-header modal-header-yellow';
    this.modal.open(this.modalContent, { windowClass: 'animated bounceInUp' });
  }

  addGaps(gaps: CalendarEvent[], cacheGaps = true): void {
    if (cacheGaps) {
      ApplicationSharedData.getInstance().addLoadedMonth(this.mode, this.viewDate, gaps);
    }
    this.events = gaps;
    this.refresh.next();
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach((cell) => {
      const groups: any = {};
      cell.events.sort((a, b) => {
        return (a.meta.type + a.title).localeCompare(b.meta.type + b.title);
      });
      cell.events.forEach((event: CalendarEvent<{ type: string }>) => {
        groups[event.meta.type] = groups[event.meta.type] || [];
        groups[event.meta.type].push(event);
      });
      cell['gapGroups'] = (<any>Object).entries(groups);
    });
  }

}
