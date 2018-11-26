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
  param1;



httpOptions;
 intercept(
  req: HttpRequest<any>,
  next: HttpHandler,
 ): Observable<HttpEvent<any>> {
  const dupReq = req.clone({
   //headers: req.headers.set('Authorization', `Bearer ${this.param1}`),
   headers: req.headers.set('Authorization', `Bearer BQCFji6ugYMH50H7MuSpilf-PjzMOLQ_rAy5G-OIJEK_oFkabW4JPdbsdKeRVIJ9RtPxAs06lOR8_KB2LV2-6F_n6C1EinxcV5A9HT6v-UcwNngpryYc2VrPE2dNySZv0y9DeNk236v-VvQ2QSQkqZ7U_gKLCxRdmxNa`),
 });
 return next.handle(dupReq);
 }

 constructor(private router: Router) {
  this.param1 = new URLSearchParams(this.router.url).paramsMap.get('/music/home#access_token');
  localStorage.setItem('accessToken',  this.param1);
  if (this.param1 === null) {
    this.param1 = localStorage.getItem('accessToken');
  } else {
    this.param1 = new URLSearchParams(this.router.url).paramsMap.get('/music/home#access_token');
    localStorage.setItem('accessToken',  this.param1);
  }
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
