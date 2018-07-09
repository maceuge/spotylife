import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = {'':''};

  constructor(private spotyService: SpotifyService,
              private router: Router,
              private activRoute: ActivatedRoute) {

      this.activRoute.params.subscribe( param => {
        //console.log(param['id']);
        this.spotyService.getArtistInfo(param['id'])
                      .subscribe(data => {
                        console.log(data);
                        this.artist = data;
                      });
      });
  }

  ngOnInit() {
  }

}
