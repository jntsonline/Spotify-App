import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

declare global {
  interface Window { Spotify: any; onSpotifyWebPlaybackSDKReady: any; }
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})


export class PlayerComponent implements OnInit {

  isPlaying;                // Change Play/Pause Btns
  trackLoaded;              // Show if player has a loaded Track
  loadedTrack;              // Loaded track data
  device_id;                // Device id from WebPlayer
  webPlayer;                // WebPlayer API

  time: Subscription;       // Time counter Observable
  minTemp;                  // Music current position
  maxTemp;                  // Music duration
  maxSlider;                // Maximum Slider position
  sliderSeekerValue: any;   // Slider current position

  constructor(private playerService: PlayerService, private router: Router) {
    this.isPlaying = false;
    this.trackLoaded = true;
  }


  handleScriptLoad = () => {
    return new Promise((resolve: any) => {
      if (window.Spotify) {
        resolve();
      } else {
        window.onSpotifyWebPlaybackSDKReady = resolve;
      }
    });
  }


  registerPlayer() {
    window.onSpotifyWebPlaybackSDKReady = () => {
      this.webPlayer = new window.Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(localStorage.getItem('accessToken')); }
      });

      // Error handling
      this.webPlayer.addListener('initialization_error', ({ message }) => { console.error(message); });
      this.webPlayer.addListener('authentication_error', ({ message }) => { console.error(message); });
      this.webPlayer.addListener('account_error', ({ message }) => { console.error(message); });
      this.webPlayer.addListener('playback_error', ({ message }) => { console.error(message); });

      // Playback status updates
      this.webPlayer.addListener('player_state_changed', state => {
         this.trackLoaded = false;
         this.loadedTrack = state;
         if (state.paused === true) {
          this.pause();
         }
        });

      // Ready
      this.webPlayer.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        this.device_id = device_id;
      });

      // Not Ready
      this.webPlayer.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
        this.device_id = device_id;
      });

      // Connect to the player!
      this.webPlayer.connect().then(success => {
        if (success) {
            console.log('The Web Playback SDK successfully connected to Spotify!');
        }
        });
    };

  }

  goToTracklist(list) {
    console.log(list.id);
    this.router.navigate(['/music/track-list', list.id]);
  }
  play() {
    this.isPlaying = true;
    this.webPlayer.resume().then(() => {
      console.log('Resumed Music');
      this.timeSeeker(this.loadedTrack.duration);
    });
  }
  pause() {
    this.isPlaying = false;
    this.webPlayer.pause().then(() => {
      console.log('Music Paused');
      this.time.unsubscribe();
    });
  }
  next() {
    this.time.unsubscribe();
    this.webPlayer.nextTrack().then(() => {
      console.log('Skipped to next track!');
      this.webPlayer.getCurrentState().then((data) => {
        this.loadedTrack = data;
        this.minTemp = 0;
        this.sliderSeekerValue = 0;
        this.timeSeeker(data.duration);
      });
    });
  }

  timeSeeker(max) {
    this.maxTemp = new Date(1000 * Math.round(max / 1000));
    this.maxSlider = (max / 1000);

    this.time = interval(1000).subscribe((data) => {
      this.sliderSeekerValue ++;
      this.minTemp = new Date((this.sliderSeekerValue * 1000));
      });
  }

  ngOnInit( ) {

    this.handleScriptLoad();
    this.registerPlayer();


    this.playerService.getTrack().subscribe((data: any) => {
      console.log(data);
      if (data === null) { this.isPlaying = false; } else {
        this.playerService.prepareUrl(data, this.device_id).subscribe((response: any) => {
          this.webPlayer.getCurrentState().then((currentStateData) => {
            this.loadedTrack = currentStateData;
            console.log(this.loadedTrack);
            this.minTemp = 0;
            this.sliderSeekerValue = 0;
            if (this.time !== undefined) { this.time.unsubscribe(); }
            this.timeSeeker(currentStateData.duration);

          });


          this.trackLoaded = false;
          this.isPlaying = true;
        });
      }

    });





  }

}
