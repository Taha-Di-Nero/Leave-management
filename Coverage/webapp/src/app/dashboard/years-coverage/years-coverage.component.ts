import { Component, OnDestroy, OnInit, Input } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { CalendarEvent } from 'calendar-utils/dist/calendar-utils';

import { ApplicationSharedData } from '../../shared/application-shared-data';
import { Utils } from '../../shared/utils';

@Component({
  selector: 'app-years-coverage',
  templateUrl: './years-coverage.component.html',
  styleUrls: ['./years-coverage.component.css']
})
export class YearsCoverageComponent implements OnInit, OnDestroy {

  yearCoverageSubscription: Subscription;

  @Input() yearsMonths: Date[];
  yearMonthsWorkingDays: number[] = new Array<number>();
  baseMonthCoverage = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  areaNumber = 69;

  data: any[] = [{ name: 'Copertura annuale (%)', series: [] }];


  view: any[] = [350, 200];

  colorScheme = {
    domain: ['#3f51b5']
  };

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';
  autoScale = true;

  private locale = 'it-IT';

  constructor() { }

  ngOnInit() {
    this.setChartSerie();
    this.yearMonthsWorkingDays = Utils.getYearMonthsWorkingDays(this.yearsMonths);

    this.yearCoverageSubscription = ApplicationSharedData.getInstance().getYearsCoverage().filter(gaps => !!gaps).subscribe(
      gaps => {
        this.calculateCoverage(gaps);
      }
    );
  }

  setChartSerie(): void {
    for (const month of this.yearsMonths) {
      this.data[0]['series'].push({ name: month.toLocaleString(this.locale, { month: 'short' }), value: 100 });
      this.data = [...this.data];
    }
  }

  calculateCoverage(gaps: CalendarEvent[]): void {
    this.baseMonthCoverage = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const groups: any = {};
    gaps.forEach((event: CalendarEvent<{ area: string }>) => {
      groups[event.meta.area] = groups[event.meta.area] || [];
      groups[event.meta.area].push(event);
    });

    let areeWithLeaves = 0;
    Object.entries(groups).forEach(areaEvents => {
      areeWithLeaves++;
      const baseMonthPresence = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const areaEmployesNumer = areaEvents[1][0].meta.employesNumer;

      baseMonthPresence.forEach((v, i) => {
        baseMonthPresence[i] = this.yearMonthsWorkingDays[i] * areaEmployesNumer;
      });
      areaEvents[1].forEach((event: CalendarEvent) => {
        baseMonthPresence[event.start.getMonth()]--;
      });
      baseMonthPresence.forEach((v, i) => {
        this.baseMonthCoverage[i] += (v / (this.yearMonthsWorkingDays[i] * areaEmployesNumer));
      });
    });

    this.baseMonthCoverage.forEach((v, i) => {
      for (let j = areeWithLeaves; j < this.areaNumber; j++) {
        v++;
      }
      this.data[0]['series'][i]['value'] = (v / this.areaNumber) * 100;
    });
    this.data = [...this.data];
  }

  ngOnDestroy() {
    if (this.yearCoverageSubscription) {
      this.yearCoverageSubscription.unsubscribe();
    }
  }

}

