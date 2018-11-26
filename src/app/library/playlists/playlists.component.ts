import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  playlists;

  constructor(private Service: PlaylistsService) { }

  ngOnInit() {
    this.Service.getPlaylists().subscribe((data) => {
      console.log(data);
      this.playlists = data;
    });
  }

}
