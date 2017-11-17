import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const withXMLHttpRequestHeader = req.clone({headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')});
    return next.handle(withXMLHttpRequestHeader);
  }
}
