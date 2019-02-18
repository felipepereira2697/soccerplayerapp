import { Injectable } from '@angular/core';
import { Soccerplayer } from './soccerplayer';
import { PLAYERS } from './mock-players';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
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
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
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
    //All HttpClient methods return an RxJS Observable of something.
    return this.http.get<Soccerplayer[]>(this.soccerplayersUrl).pipe(
      tap(_ => this.log('fetched soccerplayers')),
      catchError(this.handleError('getSoccerplayers', []))
    );
  }

  getSoccerPlayer(id: Number): Observable<Soccerplayer>
  {
    //returning the mock data
    //After soccerplayers are fetched, send a message
    const url = `${this.soccerplayersUrl}/${id}`;
    this.messageService.add(`Soccerplayer Service: fetched soccerplayer id=${id}`);
    //return of(PLAYERS.find(soccerplayer => soccerplayer.id === id));
    return this.http.get<Soccerplayer>(url).pipe(
      tap(_ => this.log(`fetched soccerplayer id=${id}`)),
      catchError(this.handleError<Soccerplayer>(`getSoccerplayer id=${id}`))
    );
  }

  updateHero (soccerplayer: Soccerplayer): Observable<any> 
  {
    return this.http.put(this.soccerplayersUrl, soccerplayer, httpOptions).pipe(
      tap(_ => this.log(`updated soccerplayer id=${soccerplayer.id}`)),
      catchError(this.handleError<any>('update soccerplayer'))
    );
  }

  addSoccerplayer (soccerplayer: Soccerplayer): Observable<Soccerplayer> {
    return this.http.post<Soccerplayer>(this.soccerplayersUrl, soccerplayer, httpOptions).pipe(
      tap((newSoccerplayer: Soccerplayer) => this.log(`added soccerplayer w/ id=${newSoccerplayer.id}`)),
      catchError(this.handleError<Soccerplayer>('addSoccerplayer'))
    );
  }
}
