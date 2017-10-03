import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { BaseService } from './base.service';
import { HolidayShutdown } from '../shared/dto/holiday-shutdown';
import { HolidayShutdownsUri } from '../shared/enums';

@Injectable()
export class HolidayShutdownsService extends BaseService {

  getHolidayShutdowns(): Promise<HolidayShutdown[]> {
    const uri = HolidayShutdownsUri.HolidayShutdownsBase;
    return this.get(`${uri}`)
      .toPromise()
      .then((response) => {
        return response.json() as HolidayShutdown[];
      })
      .catch(this.handleError);
  }

  saveHolidayShutdown(holidayShutdown: HolidayShutdown): Promise<HolidayShutdown> {
    const uri = HolidayShutdownsUri.HolidayShutdownsBase;
    return this.post(`${uri}`, this.formatDate(holidayShutdown))
      .toPromise().catch(this.handleError);
  }

  deleteHolidayShutdown(id: number): Promise<HolidayShutdown> {
    const uri = HolidayShutdownsUri.HolidayShutdownsBase;
    return this.delete(`${uri}${id}`).toPromise().catch(this.handleError);
  }

  private formatDate(holidayShutdown: any): any {
    const from = holidayShutdown.from as NgbDateStruct;
    const to = holidayShutdown.to as NgbDateStruct;
    const copy = {
      id: holidayShutdown.id,
      'from': `${from.year}-${from.month}-${from.day}`,
      'to': `${to.year}-${to.month}-${to.day}`
    };
    return copy;
  }
}
