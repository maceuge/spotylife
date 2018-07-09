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
      'Authorization': 'Bearer BQCycVsMmYnVzW4Am3BNFCiG5fmwZYcVvYoNaH8NFFBo4fJAULB68yW5v6YzuA_BKFQJks1vIL3fd7BfaYM'
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

  getArtistInfo(id: string) {
    return this.getQuery(`artists/${id}`).pipe(map( data => data));
  }

}
