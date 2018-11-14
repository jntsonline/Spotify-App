import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response_type = 'token';
  client_id = encodeURIComponent('6d392f160f154cc9b7075b9b054ae089');
  scope = encodeURIComponent('');
  redirect_uri = encodeURIComponent('http://172.16.1.188:4200/home/');

  getLogin() {
    alert('login');
    window.open(
      `https://accounts.spotify.com/authorize?` +
      `response_type=${this.response_type}&client_id=${this.client_id}&scope=${this.scope}&redirect_uri=${this.redirect_uri}`
      );
  }
  constructor() { }

  ngOnInit() {
  }

}
