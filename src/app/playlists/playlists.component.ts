import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';


@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  playlists: any;



  getPlay() {
    this.Service.getPlaylists().subscribe((data) => {
      console.log(data);
      this.playlists = data;
    });
  }
  ngOnInit() {
    this.getPlay();
  }
  constructor(private Service: HomeService) { }

}
