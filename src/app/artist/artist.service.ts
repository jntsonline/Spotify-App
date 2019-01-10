import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtistInfo(artist_id) {
    return this.http.get(`https://api.spotify.com/v1/artists/${artist_id}`);
  }

  getArtistTopTracks(artist_id) {
    return this.http.get(`https://api.spotify.com/v1/artists/${artist_id}/top-tracks?country=BR`);
  }
}
