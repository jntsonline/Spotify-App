import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  prepareUrl(url) {
    return this.http.get(`https://api.spotify.com/v1/tracks/${url}`);
  }
  constructor(private http: HttpClient) { }
}
