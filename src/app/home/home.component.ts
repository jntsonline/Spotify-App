import { Component, OnInit } from '@angular/core';
import { Router, NavigationCancel } from '@angular/router';
import { URLSearchParams, } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  param1: any;
  param2: string;








constructor(
  public router: Router,
  private Service: HomeService,
  private http: HttpClient
  ) {

  this.param1 = new URLSearchParams(this.router.url);

}

  ngOnInit() {
  }

}
