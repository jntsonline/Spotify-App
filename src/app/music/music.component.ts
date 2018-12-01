import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationCancel } from '@angular/router';
import { URLSearchParams, } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/platform-browser';
import { MusicService } from './music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})

export class MusicComponent implements OnInit {
  param1: any;
  param2: string;
  navs;








constructor(
  public router: Router,
  private Service: MusicService,
  private http: HttpClient
  ) {

  this.param1 = new URLSearchParams(this.router.url);
  this.navs = [
    {
      icon: 'play_arrow',
      name: 'Home',
      state: 'home'
    },
    {
      icon: 'library_music',
      name: 'Your Library',
      state: 'library'
    },
    {
      icon: 'history',
      name: 'Recents',
      state: 'library'
    }
  ];

}


  ngOnInit() {
  }

}
