import { Component, OnInit, Input } from '@angular/core';
import { Soccerplayer} from '../soccerplayer';

/* now that we re using routes we need a new way to get the right soccerplayer to display, to do so... */

/*
  The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. 
  This component is interested in the route's bag of parameters extracted from the URL. 
  The "id" parameter is the id of the hero to display.
*/
import { ActivatedRoute } from '@angular/router';
/*
  The HeroService gets hero data from the remote server and this component will use it to get the hero-to-display.
*/
import { SoccerplayerService } from '../soccerplayer.service';

/*
  The location is an Angular service for interacting with the browser. 
  You'll use it later to navigate back to the view that navigated here.
*/
import { Location } from '@angular/common';

@Component({
  selector: 'app-soccerplayer-detail',
  templateUrl: './soccerplayer-detail.component.html',
  styleUrls: ['./soccerplayer-detail.component.css']
})
export class SoccerplayerDetailComponent implements OnInit {

  
  /* The hero property must be an Input property, annotated with the @Input() decorator, 
  because the external SoccerPlayersComponent will bind to it like this. 
  OBS: injetando atributos/propriedades de um componente pai pra um componente filho
  */
  @Input() selectedSoccerPlayer: Soccerplayer;
  constructor(private route: ActivatedRoute, private soccerPlayerService: SoccerplayerService, private location: Location) { }

  ngOnInit(): void 
  {
    this.getSoccerplayer();
  }

  getSoccerplayer(): void
  {
    //Extracting the id from the url route
    const id = +this.route.snapshot.paramMap.get('id');
    this.soccerPlayerService.getSoccerPlayer(id).subscribe(selectedSoccerPlayer => this.selectedSoccerPlayer = selectedSoccerPlayer)
  }
  goBack():void
  {
    //going back to the previous page
    this.location.back();
  }
}
