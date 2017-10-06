import { Employe } from '../shared/dto/employe';
import { Injectable } from '@angular/core';
import { Response, ResponseContentType } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { format, isSameDay, addDays } from 'date-fns';

import { BaseService } from './base.service';
import { FullDayLeave } from '../shared/dto/leave';
import { LeaveState, LeaveUri } from '../shared/enums';
import { LeavesPlanUpdate } from '../shared/dto/Leaves-plan-update';
import { UpdatePlanResponse } from '../shared/dto/update-plan-response';
import { EmployeLeaves } from '../shared/dto/employe-leaves';
import { Utils } from '../shared/utils';

@Injectable()
export class LeaveService extends BaseService {

  getLeaves(fromDate: string, toDate: string, employeId: number): Promise<FullDayLeave[]> {
    const uri = `${LeaveUri.GetLeavesByEmploye}${fromDate}/${toDate}${this.getEmployeIdParam(employeId)}`;
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

  getLeavesByState(state: LeaveState): Promise<EmployeLeaves[]> {
    const uri = `${LeaveUri.GetLeavesByState}${state}`;
    return this.get(uri)
      .toPromise()
      .then((response) => {
        return this.toEmployeLeaves(response.json() as FullDayLeave[]);
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

  private toEmployeLeaves(leaves: FullDayLeave[]): EmployeLeaves[] {
    const employeLeaves = new Array<EmployeLeaves>();
    let employe: EmployeLeaves;
    leaves.forEach(l => {
      employe = employeLeaves.find(el => el.id === l.employe.id);
      if (!employe) {
        employe = new EmployeLeaves(l.employe.id, l.employe.surname.concat(' ', l.employe.name));
        employeLeaves.push(employe);
      }
      employe.leaves.push(format(l.date, 'YYYY-MM-DD'));
    });
    return this.concatDates(employeLeaves);
  }

  private concatDates(employeLeaves: EmployeLeaves[]): EmployeLeaves[] {
    employeLeaves.forEach(el => {
      const leavesInterval = new Array<string>();
      let tempDate = addDays(el.leaves[0], -1);
      let lastDate = new Date(el.leaves[0]);
      let currentDate: Date;
      let nextDay: Date;
      let lastCurrentDate: Date;
      el.leaves.forEach(l => {
        currentDate = new Date(l);
        tempDate = this.forwardNonWorkongDays(tempDate);
        nextDay = addDays(tempDate, 1);
        if (isSameDay(nextDay, currentDate) || Utils.isHolidayDay(nextDay)) {
          tempDate = currentDate;
        } else {
          tempDate = Utils.isHolidayDay(tempDate) ? this.backwardNonWorkongDays(tempDate) : tempDate;
          lastCurrentDate = tempDate;
          leavesInterval.push(this.formatDateInterval(lastDate, tempDate));
          lastDate = tempDate = currentDate;
        }
      });
      if (currentDate !== lastCurrentDate) {
        leavesInterval.push(this.formatDateInterval(lastDate, tempDate));
      }
      el.leaves = leavesInterval;
    });

    return employeLeaves;
  }

  private forwardNonWorkongDays(from: Date): Date {
    const nextDay = addDays(from, 1);
    if (Utils.isHolidayDay(nextDay)) {
      from = this.forwardNonWorkongDays(nextDay);
    }
    return from;
  }

  private backwardNonWorkongDays(from: Date): Date {
    from = addDays(from, -1);
    if (Utils.isHolidayDay(from)) {
      from = this.backwardNonWorkongDays(from);
    }
    return from;
  }

  private formatDateInterval(from: Date, to: Date): string {
    return isSameDay(from, to) ? format(from, 'DD-MM-YYYY') : `${format(from, 'DD-MM-YYYY')} - ${format(to, 'DD-MM-YYYY')}`;
  }

  private getEmployeIdParam(employeId: number): string {
    return !!employeId ? `?employeId=${employeId}` : '';
  }
}
