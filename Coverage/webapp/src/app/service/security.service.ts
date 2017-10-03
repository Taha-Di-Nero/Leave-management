import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Employe } from '../shared/dto/employe';
import { SecurityUri } from '../shared/enums';
import { BaseService } from './base.service';

@Injectable()
export class SecurityService extends BaseService {

  getLoggedEmploye(): Promise<Employe> {
    const uri = SecurityUri.LoggedEmploye;
    return this.get(`${uri}`)
      .toPromise()
      .then((response) => {
        return response.json() as Employe;
      })
      .catch(this.handleError);
  }

  logout(): Promise<any> {
    const uri = SecurityUri.Logout;
    this._defaultOptions.headers.set('Authorization', 'Basic logout');
    return this.get(`${uri}`, this._defaultOptions).toPromise();
  }

}
