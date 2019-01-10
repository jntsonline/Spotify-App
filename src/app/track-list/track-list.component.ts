import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackListService } from './track-list.service';
import { Observable } from 'rxjs';
import { PlayerService } from '../player/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
  dataSource;
  trackListData: Observable<any>;
  displayedColumns: string[] = ['track.uri', 'track.name', 'track.artists', 'track.album'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: TrackListService,
    private Player: PlayerService
  ) {
    this.dataSource = [];
   }

   AddToQueue(tracks) {
     const temp = [];
    tracks.items.map((data) => {
      temp.push(data.track.uri);
    });
    this.Player.setTrack(temp);
  }
  playTrack(track) {
    this.Player.setTrack([track]);
  }

   trackList(playlist_id) {
     this.service.getPlaylist(playlist_id).subscribe((data: any) => {
       console.log(data);
      this.trackListData = data;
      this.dataSource = data.tracks.items;
     });
   }

   goToAlbum(albumId) {
    console.log(albumId);
    this.router.navigate(['/music/album', albumId.album.id]);
   }

   goToArtist(artistId) {
    console.log(artistId);
    this.router.navigate(['/music/artist', artistId]);
   }

  ngOnInit() {
    const routeParams = this.activatedRoute.snapshot.params;
    this.trackList(routeParams.list);
  }


}
