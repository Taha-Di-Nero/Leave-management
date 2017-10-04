import { Injectable } from '@angular/core';
import { Response, ResponseContentType } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { format } from 'date-fns';

import { BaseService } from './base.service';
import { FullDayLeave } from '../shared/dto/leave';
import { LeaveUri } from '../shared/enums';
import { LeavesPlanUpdate } from '../shared/dto/Leaves-plan-update';
import { UpdatePlanResponse } from '../shared/dto/update-plan-response';

@Injectable()
export class LeaveService extends BaseService {

  getLeaves(fromDate: string, toDate: string, employeId: number): Promise<FullDayLeave[]> {
    const uri = `${LeaveUri.GetLeaves}${fromDate}/${toDate}${this.getEmployeIdParam(employeId)}`;
    return this.get(uri)
      .toPromise()
      .then((response) => {
        return response.json() as FullDayLeave[];
      })
      .catch(this.handleError);
  }
  getYearLeaves(year: number): Promise<FullDayLeave[]> {
    const uri = `${LeaveUri.GetYearLeaves}${year}`;
    return this.get(uri)
      .toPromise()
      .then((response) => {
        return response.json() as FullDayLeave[];
      })
      .catch(this.handleError);
  }

  updateLeavesPlan(addedLeaves: FullDayLeave[], removededLeaves: FullDayLeave[], employeId: number): Promise<UpdatePlanResponse> {
    const uri = LeaveUri.LeavesEmployePlanUpdate;
    const update = new LeavesPlanUpdate(addedLeaves.map(l => ({ id: l.id, 'date': format(l.date, 'YYYY-MM-DD'), 'state': l.state })),
      removededLeaves.map(l => ({ id: l.id, 'date': format(l.date, 'YYYY-MM-DD'), 'state': l.state })));
    return this.post(`${uri}${this.getEmployeIdParam(employeId)}`, update)
      .toPromise()
      .then((response) => {
        return response.json() as UpdatePlanResponse;
      })
      .catch(this.handleError);
  }

  getLeavesPlan(year: number): Promise<Blob> {
    const uri = LeaveUri.LeavesPlan;
    return this.get(`${uri}${year}`, { responseType: ResponseContentType.Blob }).toPromise()
      .then((response) => {
        return response.blob();
      })
      .catch(this.handleError);
  }

  private getEmployeIdParam(employeId: number): string {
    return employeId ? `?employeId=${employeId}` : '';
  }
}
