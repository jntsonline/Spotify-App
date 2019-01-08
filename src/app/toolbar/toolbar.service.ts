import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  constructor(private http: HttpClient) { }

  search(query: string, type): Observable<any> {
    return this.http
    .get(`https://api.spotify.com/v1/search?q=${query}&type=${type}&limit=3`)
    .pipe(
      map((res: Response) => {
        return res;
      })
    );

  }
}
