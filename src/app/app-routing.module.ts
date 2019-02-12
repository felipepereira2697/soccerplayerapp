import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoccerplayersComponent} from './soccerplayers/soccerplayers.component';

/*  Defining the routes --> Routes tell the router which view to display when a user 
    clicks a link or pastes a URL into the browser address bar.
*/
const routes: Routes = [
  {path: 'soccerplayers', component: SoccerplayersComponent}
] 
  

@NgModule({
  exports: [ RouterModule ]
  
})

export class AppRoutingModule 
{
}