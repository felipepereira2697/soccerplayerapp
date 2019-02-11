import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoccerplayersComponent } from './soccerplayers/soccerplayers.component';
import { FormsModule } from '@angular/forms';
import { SoccerplayerDetailComponent } from './soccerplayer-detail/soccerplayer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SoccerplayersComponent,
    SoccerplayerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
