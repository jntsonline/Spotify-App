import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  audio;
  constructor(private player: PlayerService) {
    this.audio = new Audio();
  }
  load(url) {
    this.audio.src = url;
  }
  play() {
    this.load('https://api.spotify.com/v1/tracks/6kLCHFM39wkFjOuyPGLGeQ');
    this.audio.play();
  }

  ngOnInit( ) {
  }

}
