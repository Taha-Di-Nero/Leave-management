import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { toPromise } from 'rxjs/operator/toPromise';

import { BaseService } from './base.service';
import { Employe } from '../shared/dto/employe';
import { EmployesUri } from '../shared/enums';
import { Area } from '../shared/dto/area';

@Injectable()
export class EmployesService extends BaseService {

  constructor(protected http: HttpClient) { super(http); }

  getEmployes(): Promise<Employe[]> {
    const uri = EmployesUri.EmployesBase;
    return this.http.get(`${uri}`)
      .toPromise()
      .then((response) => {
        return this.sortEmployeAreas(response as Employe[]);
      })
      .catch(this.handleError);
  }

  saveEmploye(employe: Employe): Promise<Employe> {
    const uri = EmployesUri.EmployesBase;
    return this.http.post(`${uri}`, employe).toPromise().catch(this.handleError);
  }

  deleteEmploye(id: number): Promise<Employe> {
    const uri = EmployesUri.EmployesBase;
    return this.http.delete(`${uri}${id}`).toPromise().catch(this.handleError);
  }

  getAreas(): Promise<Area[]> {
    const uri = EmployesUri.EmployeAreasBase;
    return this.http.get(`${uri}`)
      .toPromise()
      .then((response) => {
        return response as Area[];
      })
      .catch(this.handleError);
  }

  addArea(area: Area): Promise<Area> {
    const uri = EmployesUri.EmployeAreasBase;
    return this.http.post(`${uri}`, area)
      .toPromise().then((response) => {
        return response as Area;
      }).catch(this.handleError);
  }

  deleteArea(id: number): Promise<Area> {
    const uri = EmployesUri.EmployeAreasBase;
    return this.http.delete(`${uri}${id}`).toPromise().catch(this.handleError);
  }

  private sortEmployeAreas(employes: Employe[]): Employe[] {
    employes.forEach(e => e.areaList.sort((a, b) => a.description.toLocaleLowerCase().localeCompare(b.description.toLocaleLowerCase())));
    return employes;
  }
}
