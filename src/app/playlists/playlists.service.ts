import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  getPlaylists() {
    return this.http.get('https://api.spotify.com/v1/me/playlists');
  }

  constructor(private http: HttpClient) { }
}
