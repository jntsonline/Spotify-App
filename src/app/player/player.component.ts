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
    this.player.prepareUrl(url).subscribe((data: any) => {
      this.audio.src = data.preview_url;
    });
  }
  play() {
    this.load('3n3Ppam7vgaVa1iaRUc9Lp');
    this.audio.play();
  }

  ngOnInit( ) {
  }

}
