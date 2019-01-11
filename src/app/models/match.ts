export class Match{
    team1:string;
    team2:string;
    toss:string;
    decision:string;
    overs:number;
    
    constructor(team1:string, team2:string,toss:string,  decision:string, overs:number){
        this.team1=team1;
        this.team2=team2;
        this.toss=toss;
        this.decision=decision;
        this.overs=overs;
    }
    
}