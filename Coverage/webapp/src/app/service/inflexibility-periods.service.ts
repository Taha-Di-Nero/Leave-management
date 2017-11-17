import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { toPromise } from 'rxjs/operator/toPromise';

import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { BaseService } from './base.service';
import { InflexibilityPeriod } from '../shared/dto/inflexibility-period';
import { InflexibilityPeriodsUri } from '../shared/enums';
import { InflexibilityPeriodMotivation } from '../shared/dto/inflexibility-period-motivation';

@Injectable()
export class InflexibilityPeriodsService extends BaseService {

  constructor(protected http: HttpClient) { super(http); }

  getInflexibilityPeriods(): Promise<InflexibilityPeriod[]> {
    const uri = InflexibilityPeriodsUri.InflexibilityPeriodsBase;
    return this.http.get(`${uri}`)
      .toPromise()
      .then((response) => {
        return response as InflexibilityPeriod[];
      })
      .catch(this.handleError);
  }

  saveInflexibilityPeriod(inflexibilityPeriod: InflexibilityPeriod): Promise<InflexibilityPeriod> {
    const uri = InflexibilityPeriodsUri.InflexibilityPeriodsBase;
    return this.http.post(`${uri}`, this.formatDate(inflexibilityPeriod))
      .toPromise().catch(this.handleError);
  }

  deleteInflexibilityPeriod(id: number): Promise<InflexibilityPeriod> {
    const uri = InflexibilityPeriodsUri.InflexibilityPeriodsBase;
    return this.http.delete(`${uri}${id}`).toPromise().catch(this.handleError);
  }

  getMotivations(): Promise<InflexibilityPeriodMotivation[]> {
    const uri = InflexibilityPeriodsUri.InflexibilityPeriodMotivationsBase;
    return this.http.get(`${uri}`)
      .toPromise()
      .then((response) => {
        return response as InflexibilityPeriodMotivation[];
      })
      .catch(this.handleError);
  }

  addMotivation(motivation: InflexibilityPeriodMotivation): Promise<InflexibilityPeriodMotivation> {
    const uri = InflexibilityPeriodsUri.InflexibilityPeriodMotivationsBase;
    return this.http.post(`${uri}`, motivation)
      .toPromise().then((response) => {
        return response as InflexibilityPeriodMotivation;
      }).catch(this.handleError);
  }

  deleteMotivation(id: number): Promise<InflexibilityPeriodMotivation> {
    const uri = InflexibilityPeriodsUri.InflexibilityPeriodMotivationsBase;
    return this.http.delete(`${uri}${id}`).toPromise().catch(this.handleError);
  }

  private formatDate(inflexibilityPeriod: any): any {
    const from = inflexibilityPeriod.from as NgbDateStruct;
    const to = inflexibilityPeriod.to as NgbDateStruct;
    const copy = {
      id: inflexibilityPeriod.id,
      'from': `${from.year}-${from.month}-${from.day}`,
      'to': `${to.year}-${to.month}-${to.day}`,
      'inflexibilityPeriodMotivation': inflexibilityPeriod.inflexibilityPeriodMotivation,
      'employes': inflexibilityPeriod.employes
    };
    return copy;
  }
}
