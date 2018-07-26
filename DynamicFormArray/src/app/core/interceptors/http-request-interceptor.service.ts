import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpRequestInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    const clonedRequest = req.clone({
      headers: req.headers
        .set('Content-Type', 'application/json'),
      withCredentials: true
    });

    return next.handle(clonedRequest);
  }
}
