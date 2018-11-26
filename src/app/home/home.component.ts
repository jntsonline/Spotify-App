import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { HomeService } from './home.service';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredPlaylists: any;
  recentlyPlayed: any;

  AddToQueue(trackId) {
    this.Player.setTrack(trackId);
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
    private Player: PlayerService) { }

}
