import { Injectable } from '@angular/core';
import { Soccerplayer } from './soccerplayer';
import { PLAYERS } from './mock-players';
import { Observable, of} from 'rxjs';
/*
  The soccerplayer.service could get hero data from anywhere—a web service, local storage, or a mock data source.

*/
/* This @Injectable decorator says that the class participates in the dependency injection system, this Soccerplayer
service will provide an injectable service */
@Injectable({
  providedIn: 'root'
})
export class SoccerplayerService {

  constructor() { }
  //Using RXJs here to return an Observable
  getSoccerPlayers(): Observable<Soccerplayer[]>
  {
    //returning the mock data
    return of(PLAYERS);
  }
}
