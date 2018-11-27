import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private track = new BehaviorSubject<any>(null as any);

  setTrack(track) {
    console.log(`Set track ${track}`)
    this.track.next(track);
  }

  getTrack() {
    return this.track.asObservable();
  }
  prepareUrl(url, device_id) {
    console.log(url);
    return this.http.put(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,{
      uris:[`${url}`,`spotify:track:7e8utCy2JlSB8dRHKi49xM`]
    });
  }
  constructor(private http: HttpClient) { }
}
