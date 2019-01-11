import { Injectable } from '@angular/core';
import {Team1} from 'src/app/models/team1';


@Injectable({
  providedIn: 'root'
})
export class Team1Service {
  team1players:Array<Team1>=[];
  
  addTeam1( name1:string,role1:string ){
    this.team1players.push(new Team1(name1,role1));
    console.log(this.team1players);
  }
  
  addPlayers1( teamplayer1:Array<Team1>){
    this.team1players=teamplayer1;
  }
  
  constructor() { }
}
