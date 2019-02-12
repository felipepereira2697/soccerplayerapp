import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoccerplayersComponent} from './soccerplayers/soccerplayers.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { SoccerplayerDetailComponent } from './soccerplayer-detail/soccerplayer-detail.component';
/*  Defining the routes --> Routes tell the router which view to display when a user 
    clicks a link or pastes a URL into the browser address bar.
*/
const routes: Routes = [
  //To make the app navigate to the dashboard automatically, add the following route to the AppRoutingModule.Routes array.
  //This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'soccerplayers', component: SoccerplayersComponent},
  {path: 'dashboard', component:DashboardComponent},
  //Then add a parameterized route the : indicates is a placeholder for a specific id
  {path: 'detail/:id', component:SoccerplayerDetailComponent},


] 
  

@NgModule({
  //initializing the router to listen for browser location changes
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule 
{
}