import { Employe } from '../shared/dto/employe';
import { Injectable } from '@angular/core';
import { Response, ResponseContentType } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { format } from 'date-fns';

import { BaseService } from './base.service';
import { FullDayLeave } from '../shared/dto/leave';
import { LeaveState, LeaveUri } from '../shared/enums';
import { LeavesPlanUpdate } from '../shared/dto/Leaves-plan-update';
import { UpdatePlanResponse } from '../shared/dto/update-plan-response';
import { EmployeLeaves } from '../shared/dto/employe-leaves';

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
      employe.leaves.push(format(l.date, 'DD/MM/YYYY'));
    });
    return employeLeaves;
  }

  private getEmployeIdParam(employeId: number): string {
    return !!employeId ? `?employeId=${employeId}` : '';
  }
}
