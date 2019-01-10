import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from './album.service';
import { Observable } from 'rxjs';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  dataSource;
  trackListData: Observable<any>;
  displayedColumns: string[] = ['track.uri', 'track.name', 'track.artists', 'track.duration_ms'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: AlbumService,
    private Player: PlayerService
  ) {
    this.dataSource = [];
   }

   AddToQueue(tracks) {
     const temp = [];
     console.log(tracks);
    tracks.items.map((data) => {
      temp.push(data.uri);
    });
    this.Player.setTrack(temp);
  }
  playTrack(track) {
    console.log(track);
    this.Player.setTrack([track]);
  }

   albumList(playlist_id) {
     this.service.getPlaylist(playlist_id).subscribe((data: any) => {
       console.log(data);
      this.trackListData = data;
      this.dataSource = data.tracks.items;
     });
   }

  ngOnInit() {
    const routeParams = this.activatedRoute.snapshot.params;
    this.albumList(routeParams.list);
  }


}
