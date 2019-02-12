import { Component, OnInit } from '@angular/core';
//Soccerplayer CLASS 
import {Soccerplayer} from '../soccerplayer';
import { SoccerplayerService } from '../soccerplayer.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  soccerplayers: Soccerplayer[] = [];
  constructor(private soccerplayerService: SoccerplayerService) 
  {

  }

  ngOnInit() 
  {
    this.getSoccerplayers();
  }
  getSoccerplayers(): void
  {
    //bring a random list to top players
    this.soccerplayerService.getSoccerPlayers().subscribe(soccerplayers => this.soccerplayers = soccerplayers.slice(1,5));
  }
}
