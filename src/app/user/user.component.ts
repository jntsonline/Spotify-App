import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

export interface AccountUser {
  'country': string;
  'display_name': string;
  'email': string;
  'external_urls': {
    'spotify': string
  };
  'followers': {
    'href': string;
    'total': number;
  };
  'href': string;
  'id': string;
  'images': Array<{
    'height': number;
    'url': string;
    'width': number
  }>;
  'product': string;
  'type': string;
  'uri': string;

}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
param1: any;
userValues: AccountUser;

  getAccess() {


     this.http.get('https://api.spotify.com/v1/me').subscribe((data: AccountUser) => {
       this.userValues = data;
       console.log(data);
     });
   }

  constructor(
    private Service: HomeService,
    private http: HttpClient) {
    this.getAccess();
   }

  ngOnInit() {
  }

}
