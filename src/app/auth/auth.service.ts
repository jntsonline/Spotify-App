
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    param1: any = new URLSearchParams(this.router.url).paramsMap.get('/home#access_token');
    httpOptions;

    public getToken(): string {
        return localStorage.getItem('token');
    }
    public setToken() {
        localStorage.setItem('token', this.param1);
    }
    constructor(private http: HttpClient, private router: Router) {
          this.httpOptions = {
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + this.getToken()
            })
          };
      }
}
