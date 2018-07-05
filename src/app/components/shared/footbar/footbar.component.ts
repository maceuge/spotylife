import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styles: ['./footbar.component.css']
})
export class FootbarComponent implements OnInit {

  copyright = new Date();

  constructor() { }

  ngOnInit() {
  }

}
