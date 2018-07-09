import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getArtist(item) {

    if (item.type === 'album') {
      console.log('esto es un album: ' + item.id);
    } else if (item.type === 'artist') {
      console.log('esto es un artista: ' + item.id);
      this.router.navigate(['/artist', item.id]);
    }
  }

}
