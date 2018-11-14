import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';




import { URLSearchParams } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  token: string;
  httpOptions: any;
  param1: any;


  getPlaylists() {
    return this.http.get('https://api.spotify.com/v1/browse/featured-playlists');
  }

  constructor(private http: HttpClient) {

  }
}
