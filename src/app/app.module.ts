import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './nasa/components/home-page/home-page.component';
import { SearchBoxComponent } from './nasa/components/search-box/search-box.component';
import { ApodComponent } from './nasa/components/apod/apod.component';
import { NeowsCardComponent } from './nasa/components/neows-card/neows-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchBoxComponent,
    ApodComponent,
    NeowsCardComponent,
  ],

  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
