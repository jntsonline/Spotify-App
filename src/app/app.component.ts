import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fadeAnimation } from './app-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class AppComponent {
  title = 'spotify-app';






  constructor() {}
}
