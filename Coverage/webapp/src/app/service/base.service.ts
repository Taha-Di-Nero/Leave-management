import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions } from '@angular/http';


@Injectable()
export class BaseService  extends Http {

  constructor (backend: XHRBackend, options: RequestOptions) {
    options.headers.set('X-Requested-With', 'XMLHttpRequest');
    super(backend, options);
  }


  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
