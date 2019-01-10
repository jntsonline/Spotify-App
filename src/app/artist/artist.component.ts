import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player/player.service';
import { ArtistService } from './artist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artistData;
  topTrackListData;
  displayedColumns: string[] = ['track.uri', 'track.name', 'track.artists', 'track.album'];
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ArtistService,
    private Player: PlayerService
  ) { }

  artistInfo(artist_id) {
    this.service.getArtistInfo(artist_id).subscribe((data: any) => {
      console.log(data);
      this.artistData = data;
    });
  }
  artistTracks(artist_id) {
    this.service.getArtistTopTracks(artist_id).subscribe((data: any) => {
      console.log(data);
      this.topTrackListData = data.tracks;
    });
  }

  ngOnInit() {
    const routeParams = this.activatedRoute.snapshot.params;
    this.artistInfo(routeParams.list);
    this.artistTracks(routeParams.list);
  }

}
