import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getQuery ( query: string ) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBcvezOnlDhhs__s4R2V8uOKwskE7IEC7DZAyViMzZSmUipI7_TSWrWBzCtubBZPr9jw0CsqeiSFpUSOQw'
    });
    return this.http.get(url, { headers });
  }

  getNewRelease () {
    return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items ));
  }

  getSearch (value: string) {
    let type = 'artist';
    return this.getQuery(`search?q=${value}&type=${type}&limit=15`).pipe( map( data => data['artists'].items ));
  }

}
