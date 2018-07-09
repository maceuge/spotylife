import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  releases: any[] = [];
  loading: boolean;

  constructor(private spotyService: SpotifyService) {

    this.loading = true;

    this.spotyService.getNewRelease().subscribe( (data: any) => {
      this.releases = data;
      this.loading = false;
    });

  }

  ngOnInit() {
  }

}
