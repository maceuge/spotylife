import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotyService: SpotifyService) { }

  ngOnInit() {
  }

  search(value: string) {
    this.loading = true;

    this.spotyService.getSearch(value).subscribe( (data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }

}
