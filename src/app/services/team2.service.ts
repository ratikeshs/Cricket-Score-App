import { Injectable } from '@angular/core';
import { Team2 } from 'src/app/models/team2';

@Injectable({
  providedIn: 'root'
})
export class Team2Service {
  
  team2players:Array<Team2>=[];
  
  addTeam2(name2:string,role2:string){
    this.team2players.push(new Team2( name2,role2))
    console.log(this.team2players);
  }
  
  addPlayers2(teamplayer2:Array<Team2>){
    this.team2players=teamplayer2;
  }
  
  constructor() { }
}
