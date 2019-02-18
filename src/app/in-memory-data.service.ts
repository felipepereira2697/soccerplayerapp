import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Soccerplayer } from './soccerplayer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  
  createDb()
  {
    const soccerplayers =   [
      {id: 1, name: 'Cruijff',                        fullName: 'Hendrik Johannes Cruijff',       favoriteShirtNumber :14},
      {id: 2, name: 'Pelé',                           fullName: 'Edson Arantes do Nascimento',    favoriteShirtNumber :10},
      {id: 3, name: 'Sócrates',                       fullName: 'Sócrates Brasileiro Sampaio',    favoriteShirtNumber :8},
      {id: 4, name: 'Ronaldo Fenômeno',               fullName: 'Ronaldo Nazário de Lima',        favoriteShirtNumber :9},
      {id: 5, name: 'Xavi',                           fullName: 'Xavi Hernandez',                 favoriteShirtNumber :6},
      {id: 6, name: 'Zidane',                         fullName: 'Zinedine Zidane',                favoriteShirtNumber :14},
      {id: 7, name: 'Buffon',                         fullName: 'Gianluiggi Buffon',              favoriteShirtNumber :1},
      {id: 8, name: 'Cassio',                         fullName: 'Cassio Ramos',                   favoriteShirtNumber :12},
      {id: 9, name: 'Roberto Carlos',                 fullName: 'Roberto Carlos da Silva Rocha',  favoriteShirtNumber :3},
      {id: 10, name: 'Cafu',                          fullName: 'Marcos Evangelista de Morais',   favoriteShirtNumber :2}
    ];

    return {soccerplayers};
  }

  // Overrides the genId method to ensure that a soccerplayer always has an id.
  // If the soccerplayers array is empty,
  // the method below returns the initial number (11).
  // if the soccerplayers array is not empty, the method below returns the highest
  // soccerplayer id + 1.
  genId(soccerplayers: Soccerplayer[]): number 
  {
    return soccerplayers.length > 0 ? Math.max(...soccerplayers.map(soccerplayer => soccerplayer.id)) + 1 : 10;
  }
  constructor() { }
}
