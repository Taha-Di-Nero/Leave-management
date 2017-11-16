import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import {toPromise} from 'rxjs/operator/toPromise';

import { CalendarEvent } from 'angular-calendar';
import { startOfDay, endOfDay } from 'date-fns';

import { COLORS, ViewMode, LeaveOverlapsUri } from '../shared/enums';
import { EmployeCoverageGaps } from '../shared/dto/employe-coverage-gaps';
import { AreaCoverageGaps } from '../shared/dto/area-coverage-gaps';
import { EmployesFlexibility } from '../shared/dto/employes-flexibility';
import { BaseService } from './base.service';

@Injectable()
export class CoverageService extends BaseService {

  searchFlexibility(): Promise<EmployesFlexibility> {
    const uri = LeaveOverlapsUri.ByFlexibility;
    return this.get(`${uri}`)
      .toPromise()
      .then((response) => {
        return new EmployesFlexibility(response.json());
      })
      .catch(this.handleError);
  }

  searchGaps(fromDate: string, toDate: string, mode: ViewMode): Promise<Array<CalendarEvent>> {
    const uri = (mode === ViewMode.Area) ? LeaveOverlapsUri.ByArea : LeaveOverlapsUri.ByEmploye;
    return this.get(`${uri}${fromDate}/${toDate}`)
      .toPromise()
      .then((response) => {
        return this.getCoverageGaps(response, mode);
      })
      .catch(this.handleError);
  }

  private getCoverageGaps(response: Response, mode: ViewMode): CalendarEvent[] {
    const gaps: EmployeCoverageGaps[] = response.json() as EmployeCoverageGaps[];
    const events: CalendarEvent[] = (mode === ViewMode.Employe) ?
      this.getCoverageGapsByEmploye(response) : this.getCoverageGapsByArea(response);
    return events;
  }

  private getCoverageGapsByEmploye(response: Response): CalendarEvent[] {
    const gaps: EmployeCoverageGaps[] = response.json() as EmployeCoverageGaps[];
    const events: CalendarEvent[] = [];
    for (const gap of gaps) {
      events.push({
        start: startOfDay(gap.date),
        end: endOfDay(gap.date),
        title: gap.employes.map(e => e.surname + ' ' + e.name).join(', ') + ': ' +
        gap.dayGaps.map(g => '[' + g.initTime + ', ' + g.endTime + ']').join(', '),
        color: (gap.employes.length === 1) ? COLORS.red : COLORS.yellow,
        meta: {
          type: (gap.employes.length === 1) ? 'danger' : 'warning',
          modalTitle: 'Procedure di ' + gap.employes.map(e => e.surname + ' ' + e.name).join(', '),
          list: gap.areas.map(a => a.description).join('\n')
        }
      });
    }
    return events;
  }

  private getCoverageGapsByArea(response: Response): CalendarEvent[] {
    const aree: AreaCoverageGaps[] = response.json() as AreaCoverageGaps[];
    const events: CalendarEvent[] = [];
    for (const a of aree) {
      for (const day of a.gaps) {
        events.push({
          start: startOfDay(day.date),
          end: endOfDay(day.date),
          title: a.area + ': ' + day.dayGaps.map(g => '[' + g.initTime + ', ' + g.endTime + ']').join(', '),
          color: (a.singleEmploye) ? COLORS.red : COLORS.yellow,
          meta: {
            area: a.area,
            employesNumer: a.employes.length,
            type: (a.singleEmploye) ? 'danger' : 'warning',
            modalTitle: 'Dipendenti assegnati a ' + a.area,
            list: a.employes.map(e => e.surname + ' ' + e.name).join('\n')
          }
        });
      }
    }
    return events;
  }
}
