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

  getMadedForPlaylists() {
    return this.http.get('https://api.spotify.com/v1/views/made-for-x?content_limit=12&locale=en&platform=web&country=BR&timestamp=2019-01-08T13:29:08.791&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10');
  }

  constructor(private http: HttpClient) { }
}
