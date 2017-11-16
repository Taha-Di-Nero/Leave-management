import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import {toPromise} from 'rxjs/operator/toPromise';

import { BaseService } from './base.service';
import { Employe } from '../shared/dto/employe';
import { EmployesUri } from '../shared/enums';
import { Area } from '../shared/dto/area';

@Injectable()
export class EmployesService extends BaseService {

  getEmployes(): Promise<Employe[]> {
    const uri = EmployesUri.EmployesBase;
    return this.get(`${uri}`)
      .toPromise()
      .then((response) => {
        return this.sortEmployeAreas(response.json() as Employe[]);
      })
      .catch(this.handleError);
  }

  saveEmploye(employe: Employe): Promise<Employe> {
    const uri = EmployesUri.EmployesBase;
    return this.post(`${uri}`, employe).toPromise().catch(this.handleError);
  }

  deleteEmploye(id: number): Promise<Employe> {
    const uri = EmployesUri.EmployesBase;
    return this.delete(`${uri}${id}`).toPromise().catch(this.handleError);
  }

  getAreas(): Promise<Area[]> {
    const uri = EmployesUri.EmployeAreasBase;
    return this.get(`${uri}`)
      .toPromise()
      .then((response) => {
        return response.json() as Area[];
      })
      .catch(this.handleError);
  }

  addArea(area: Area): Promise<Area> {
    const uri = EmployesUri.EmployeAreasBase;
    return this.post(`${uri}`, area)
      .toPromise().then((response) => {
        return response.json() as Area;
      }).catch(this.handleError);
  }

  deleteArea(id: number): Promise<Area> {
    const uri = EmployesUri.EmployeAreasBase;
    return this.delete(`${uri}${id}`).toPromise().catch(this.handleError);
  }

  private sortEmployeAreas(employes: Employe[]): Employe[] {
    employes.forEach(e => e.areaList.sort((a, b) => a.description.toLocaleLowerCase().localeCompare(b.description.toLocaleLowerCase())));
    return employes;
  }
}
