import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  getPlaylist(playlist_id) {
    return this.http.get(`https://api.spotify.com/v1/albums/${playlist_id}`);
  }
  
  constructor(private http: HttpClient) { }


}
