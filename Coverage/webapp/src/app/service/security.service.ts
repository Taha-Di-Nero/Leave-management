import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Employe } from '../shared/dto/employe';
import { SecurityUri } from '../shared/enums';
import { BaseService } from './base.service';

@Injectable()
export class SecurityService extends BaseService {

  constructor(protected http: HttpClient) { super(http); }

  getLoggedEmploye(): Promise<Employe> {
    const uri = SecurityUri.LoggedEmploye;
    return this.http.get(`${uri}`)
      .toPromise()
      .then((response) => {
        return response as Employe;
      })
      .catch(this.handleError);
  }

  logout(): Promise<any> {
    const uri = SecurityUri.Logout;
    return this.http.get(`${uri}`, { headers: new HttpHeaders().set('Authorization', 'Basic logout') }).toPromise();
  }

}
