import { Component, OnInit } from '@angular/core';
import { PLAYERS } from '../mock-players';
import {Soccerplayer} from '../soccerplayer';
//@Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-soccerplayers', //the component's CSS element selector --> THIS IS THE NAME THAT WE REFER WHEN WE WANT TO DISPLAY THE COMPONENT
  templateUrl: './soccerplayers.component.html',
  styleUrls: ['./soccerplayers.component.css']
})
export class SoccerplayersComponent implements OnInit {

  //Instantiating a Soccerplayer object here
  soccerplayers = PLAYERS;
  constructor() { }

  ngOnInit() {
  }

}
