import { Component, OnInit, Input } from '@angular/core';
import { Soccerplayer} from '../soccerplayer';
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
  constructor() { }

  ngOnInit() {
  }

}
