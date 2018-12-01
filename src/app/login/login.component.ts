import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response_type = 'token';
  client_id = encodeURIComponent('6d392f160f154cc9b7075b9b054ae089');
  scope = encodeURIComponent('user-read-recently-played streaming user-read-birthdate user-read-private user-modify-playback-state');
  redirect_uri = encodeURIComponent('http://localhost:4200/music');

  getLogin() {
    window.location.href = `https://accounts.spotify.com/authorize?` +
      `response_type=${this.response_type}&client_id=${this.client_id}&scope=${this.scope}&redirect_uri=${this.redirect_uri}`;
  }
  constructor() { }

  ngOnInit() {
  }

}
