import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import {
 HttpEvent,
 HttpInterceptor,
 HttpHandler,
 HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';




import { URLSearchParams } from '@angular/http';


@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {
param1 = new URLSearchParams(this.router.url).paramsMap.get('/home#access_token');
httpOptions;
 intercept(
  req: HttpRequest<any>,
  next: HttpHandler,
 ): Observable<HttpEvent<any>> {
  const dupReq = req.clone({
   headers: req.headers.set('Authorization', `Bearer ${this.param1}`),
 });
 return next.handle(dupReq);
 }

 constructor(private router: Router) {

  }
}

@NgModule({
providers: [
 {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpsRequestInterceptor,
  multi: true,
 },
],
})

export class Interceptor {}
