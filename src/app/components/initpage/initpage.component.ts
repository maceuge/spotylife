import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

//declare var M: any;

@Component({
  selector: 'app-initpage',
  templateUrl: './initpage.component.html',
  styleUrls: ['./initpage.component.css']
})
export class InitpageComponent implements OnInit {

  covers: any[] = [];

  constructor(private spotyService: SpotifyService) {

    this.spotyService.getNewRelease().subscribe( data => {
        this.covers = data;
        console.log(data);
    });

   }

  ngOnInit() {
  }

}
