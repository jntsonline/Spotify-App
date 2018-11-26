import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  audio;
  isPlaying;
  trackLoaded;
  loadedTrack;

  constructor(private player: PlayerService) {
    this.audio = new Audio();
    this.isPlaying = false;
    this.trackLoaded = true;
  }



  play() {
    this.isPlaying = true;
    this.audio.play();
  }
  pause() {
    this.isPlaying = false;
    this.audio.pause();
  }

  ngOnInit( ) {
    //this.player.setTrack('3n3Ppam7vgaVa1iaRUc9Lp');
    this.player.getTrack().subscribe((data: any) => {
      this.player.prepareUrl(data).subscribe((response: any) => {
        console.log(response);
        this.loadedTrack = response;
        this.audio.src = response.preview_url;
        this.trackLoaded = false;
        this.play();
      });
    });
  }

}
