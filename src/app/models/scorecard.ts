export class Scorecard{
    batsman: string;
    status: boolean;
    run: number;
    ball: number;
    strikeRate: number;
    
    constructor(batsman:string, status:boolean, run:number, ball:number, strikeRate:number){
        this.batsman=batsman;
        this.status=status;
        this.run=run;
        this.ball=ball;
        this.strikeRate=strikeRate;
    }
}