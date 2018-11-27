import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackListService {

  getPlaylist(playlist_id) {
    return this.http.get(`https://api.spotify.com/v1/playlists/${playlist_id}`);
  }
  
  constructor(private http: HttpClient) { }


}
