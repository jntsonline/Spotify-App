import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private track = new BehaviorSubject<any>({});

  setTrack(track) {
    this.track.next(track);
  }

  getTrack() {
    return this.track.asObservable();
  }
  prepareUrl(url) {
    return this.http.get(`https://api.spotify.com/v1/tracks/${url}`);
  }
  constructor(private http: HttpClient) { }
}
