import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';

declare global {
  interface Window { Spotify: any, onSpotifyWebPlaybackSDKReady:any }
}

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
  device_id;
  webPlayer;

  constructor(private player: PlayerService) {
    this.audio = new Audio();
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
     // const token = 'BQA3T4SdNZJ1W89UuSaXahorJ0QpNPpM4OzBHjZghkuKH_HM7FeR-BDO2VltnRsWR0K4O0C6Rskux130ET9aeuAKTfylTbVKMfk8khpydHrurcLiwpea8mYhNQRZP8qLicpZb0WSA_I67kWNxkLg6-DhrShh7wXVO9Q6DP_l';
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
         console.log(state); 
         this.trackLoaded = false;
         this.loadedTrack = state;
        });

      // Ready
      this.webPlayer.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        this.device_id = device_id;
      });

      // Not Ready
      this.webPlayer.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      // Connect to the player!
      this.webPlayer.connect().then(success => {
        if (success) {
            console.log('The Web Playback SDK successfully connected to Spotify!');
        }
        });


 
    };

  }
  play() {
    this.isPlaying = true;
    this.webPlayer.resume().then(()=> {
      console.log("Resumed Music")
    })
  }
  pause() {
    this.isPlaying = false;
    this.webPlayer.pause().then(()=>{
      console.log("Music Paused");
    })
  }

  ngOnInit( ) {
    
    this.handleScriptLoad();
    this.registerPlayer();

    this.player.getTrack().subscribe((data: any) => {
      console.log(data);
      if(data === null){

      }else{
        this.player.prepareUrl(data.id, data.type, this.device_id).subscribe((response: any) => {
          this.loadedTrack = response;       
          this.trackLoaded = false;
          this.isPlaying = true;         
        });
      }

    });





  }

}
