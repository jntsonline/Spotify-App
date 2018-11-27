import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from './playlists.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  playlists;

  constructor(
    private Service: PlaylistsService,
    private router: Router
    ) { }

  goToTracklist() {
    this.router.navigate(['/music/track-list'])
  }
  ngOnInit() {
    this.Service.getPlaylists().subscribe((data) => {
      console.log(data);
      this.playlists = data;
    });
  }

}
