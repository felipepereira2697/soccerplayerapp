import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoccerplayersComponent } from './soccerplayers/soccerplayers.component';
import { FormsModule } from '@angular/forms';
import { SoccerplayerDetailComponent } from './soccerplayer-detail/soccerplayer-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//To make Http Client Module available everywhere in the module
import { HttpClientModule } from '@angular/common/http';

//After install in-memory-web-api 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
@NgModule({
  declarations: [
    AppComponent,
    SoccerplayersComponent,
    SoccerplayerDetailComponent,
    MessagesComponent,
    DashboardComponent, 
    //Add HttpClientModule here
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
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
