import { Component, OnInit } from '@angular/core';
import { SoccerplayerService } from '../soccerplayer.service';
import {Soccerplayer} from '../soccerplayer';
//@Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-soccerplayers', //the component's CSS element selector --> THIS IS THE NAME THAT WE REFER WHEN WE WANT TO DISPLAY THE COMPONENT
  templateUrl: './soccerplayers.component.html',
  styleUrls: ['./soccerplayers.component.css']
})
export class SoccerplayersComponent implements OnInit {
  //Property to bind the selected soccer player
  //selectedSoccerPlayer: Soccerplayer;
  //Instantiating a Soccerplayer object here
  soccerplayers: Soccerplayer[];

  /* Here the dependecy injection for the SoccerPlayerService */
  constructor(private soccerPlayerService: SoccerplayerService) 
  {
    /*
      Reserve the constructor for simple initialization such as wiring constructor parameters to properties. 
      The constructor shouldn't do anything.
    */
  }

  getSoccerPlayer(): void
  {
    //Retrieving soccerplayers data from an external source (webservice, db) or a mock class
    
    //Then subscribe passes the emitted array to the callback, which sets the component's heroes property.
    this.soccerPlayerService.getSoccerPlayers()
                  .subscribe(soccerplayers => this.soccerplayers = soccerplayers);
  }

  ngOnInit() 
  {
    //only called after constructing a soccerplayer component instance
    this.getSoccerPlayer();
  }

  add(name: string): void
  {
    name = name.trim();
    if(!name) {return; };
    this.soccerPlayerService.addSoccerplayer({ name } as Soccerplayer).subscribe(soccerplayer => {this.soccerplayers.push(soccerplayer)});

  }

  delete(socceplayer: Soccerplayer): void
  {
    this.soccerplayers = this.soccerplayers.filter(s => s != socceplayer);
    this.soccerPlayerService.deleteSoccerplayer(socceplayer).subscribe();
  }
  /*
  As we are using router there is no sense to keep the onselect method anymore
  onSelect(soccerplayer: Soccerplayer): void
  {
    this.selectedSoccerPlayer = soccerplayer;
  }
  */


}
