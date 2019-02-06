import { Component, OnInit } from '@angular/core';
import {Soccerplayer} from '../soccerplayer';
//@Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-soccerplayers', //the component's CSS element selector --> THIS IS THE NAME THAT WE REFER WHEN WE WANT TO DISPLAY THE COMPONENT
  templateUrl: './soccerplayers.component.html',
  styleUrls: ['./soccerplayers.component.css']
})
export class SoccerplayersComponent implements OnInit {

  soccerplayer: Soccerplayer = {
    id: 1,
    name: 'Cruijff',
    fullName: 'Hendrik Johannes Cruijff',
    favoriteShirtNumber :14
  }
  constructor() { }

  ngOnInit() {
  }

}
