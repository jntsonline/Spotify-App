import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { HomeService } from './home.service';
import { PlayerService } from '../player/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredPlaylists: any;
  recentlyPlayed: any;

  AddToQueue(trackId) {
    console.log(trackId);
    this.Player.setTrack(trackId);
  }
  goToTracklist(list) {
    console.log(list.id);
    this.router.navigate(['/music/track-list', list.id]);
  }

  FeaturedPlaylists() {
    this.Service.getFeaturedPlaylists().subscribe((data) => {
      this.featuredPlaylists = data;
      console.log(data);
    });
  }
  RecentlyPlayer() {
    this.Service.getRecentlyPlayed().subscribe((data) => {
      console.log(data);
      this.recentlyPlayed = data;
    });
  }
  ngOnInit() {
    this.FeaturedPlaylists();
    this.RecentlyPlayer();
  }
  constructor(
    private Service: HomeService,
    private Player: PlayerService,
    private router: Router) { }

}
