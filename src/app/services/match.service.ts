import { Injectable } from '@angular/core';
import { Match } from '../models/match';
@Injectable({
  providedIn: 'root'
})
export class MatchService {
  
  matcH: Array<Match> = [];
  batSelcectd1;
  bowlSelected1;
  random;
  constructor() { }
  
  addMatch(team1: string, team2: string, toss: string, decision: string, overs: number) {
    this.matcH.push(new Match(team1, team2, toss, decision, overs));
    console.log(this.matcH[0]);
    
    this.random = (team1 == toss) && (decision == 'Batting');
    console.log(this.random);
    
    this.random = (team2==toss) && (decision == 'Bowling');
    console.log(this.random);
    
    if ((team1 == toss) && (decision == 'Batting')) {
      this.batSelcectd1 = team1;
      this.bowlSelected1 = team2;
      console.log((team1 == toss) && (decision == 'Batting'));
      console.log(this.batSelcectd1);
    }
    
    if ((team1 == toss) && (decision == 'Bowling')) {
      this.batSelcectd1 = team2;
      this.bowlSelected1 = team1;
      console.log((team1 == toss) && (decision == 'Bowling'));
      console.log(this.bowlSelected1);
    }
    
    
    if ((team2 == toss) && (decision == 'Batting')) {
      this.batSelcectd1 = team2;
      this.bowlSelected1 = team1;
      console.log(this.batSelcectd1);
    }
    
    
    if ((team2 == toss) && (decision == 'Bowling')) {
      this.batSelcectd1 = team1;
      this.bowlSelected1 = team2;
      console.log(this.bowlSelected1);
    }
  }
  
  addTeam1(mat: Array<Match>) {
    this.matcH = mat;
  }
  
}
