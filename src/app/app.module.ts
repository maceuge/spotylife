import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Router
import { FeatureRoutingModule } from './app.routes';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FootbarComponent } from './components/shared/footbar/footbar.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardComponent } from './components/shared/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { InitpageComponent } from './components/initpage/initpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    AboutComponent,
    NavbarComponent,
    FootbarComponent,
    NoimagePipe,
    CardComponent,
    LoadingComponent,
    InitpageComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
