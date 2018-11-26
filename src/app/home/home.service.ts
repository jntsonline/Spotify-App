import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  getFeaturedPlaylists() {
    return this.http.get('https://api.spotify.com/v1/browse/featured-playlists');
  }

  getRecentlyPlayed() {
    return this.http.get('https://api.spotify.com/v1/me/player/recently-played');
  }

  constructor(private http: HttpClient) { }
}
