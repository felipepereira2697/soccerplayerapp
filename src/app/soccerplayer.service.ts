import { Injectable } from '@angular/core';
import { Soccerplayer } from './soccerplayer';
import { PLAYERS } from './mock-players';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/*
  The soccerplayer.service could get hero data from anywhere—a web service, local storage, or a mock data source.

*/
/* This @Injectable decorator says that the class participates in the dependency injection system, this Soccerplayer
service will provide an injectable service */
@Injectable({
  providedIn: 'root'
})
export class SoccerplayerService {
  private soccerplayersUrl = 'api/soccerplayers';  // URL to web api
  /*
    Here we have a typical service-in-service scenario, so we inject message service into soccer player service that will
    be injected in soccerplayercomponent
  */
  constructor(private http: HttpClient, private messageService: MessageService)
  { 

  }

  private log(message: string) 
  {
    this.messageService.add(`Soccerplayer service: ${message}`);
  }
  //Using RXJs here to return an Observable
  getSoccerPlayers(): Observable<Soccerplayer[]>
  {
    //returning the mock data
    //After soccerplayers are fetched, send a message
    this.messageService.add('Soccerplayers Service says: Nice! Soccerplayers fetched');
    //return of(PLAYERS);
    return this.http.get<Soccerplayer[]>(this.soccerplayersUrl);
  }

  getSoccerPlayer(id: Number): Observable<Soccerplayer>
  {
    //returning the mock data
    //After soccerplayers are fetched, send a message
    this.messageService.add(`Soccerplayer Service: fetched soccerplayer id=${id}`);
    return of(PLAYERS.find(soccerplayer => soccerplayer.id === id));
  }
}
