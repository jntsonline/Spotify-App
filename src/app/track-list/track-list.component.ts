import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackListService } from './track-list.service';
import { Observable } from 'rxjs';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
  dataSource;
  trackListData: Observable<any>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: TrackListService,
    private Player: PlayerService
  ) {
    this.dataSource = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ]
    
   }

   AddToQueue(itemToPlay) {
    this.Player.setTrack(itemToPlay);
  }

   trackList(playlist_id) {
     this.service.getPlaylist(playlist_id).subscribe((data) =>{
       console.log(data);
      this.trackListData = data;
     })
   }

  ngOnInit() {
    const routeParams = this.activatedRoute.snapshot.params;
    this.trackList(routeParams.list)
  }


}
