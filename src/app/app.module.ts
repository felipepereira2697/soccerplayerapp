import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoccerplayersComponent } from './soccerplayers/soccerplayers.component';
import { FormsModule } from '@angular/forms';
import { SoccerplayerDetailComponent } from './soccerplayer-detail/soccerplayer-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    SoccerplayersComponent,
    SoccerplayerDetailComponent,
    MessagesComponent
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
