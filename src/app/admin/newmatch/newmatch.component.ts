import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/models/match';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-newmatch',
  templateUrl: './newmatch.component.html',
  styleUrls: ['./newmatch.component.css']
})
export class NewmatchComponent implements OnInit {
  te1;
  te2;
  match:Match;
  decision1;
  toss1;
  selected="selected";
  matchDetails:Array<Match>=[];
  
  @ViewChild('team1') team1InTS: ElementRef;
  @ViewChild('team2') team2InTS: ElementRef;
  @ViewChild('toss') tossInTS: ElementRef;
  @ViewChild('decision') decisionInTS: ElementRef;
  @ViewChild('overs') oversInTS: ElementRef;
  
  private btnDisable: boolean = true;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private mat:MatchService) { 
      
    }
    
    ngOnInit() {
    }
    
    onSelectTeam1(){
      this.te1=((<HTMLInputElement>this.team1InTS.nativeElement).value);
    }
    
    onSelectTeam2(){
      this.te2=((<HTMLInputElement>this.team2InTS.nativeElement).value);
      this.btnDisable=false;
    }
    
    onDesc1()
    {
      this.toss1=((<HTMLInputElement>this.tossInTS.nativeElement).value);
    }
    
    onDesc()
    {
      this.decision1=((<HTMLInputElement>this.decisionInTS.nativeElement).value);
    }
    
    onDefineTeamClick(){
      this.mat.addMatch(
        (<HTMLInputElement>this.team1InTS.nativeElement).value,
        (<HTMLInputElement>this.team2InTS.nativeElement).value,
        (<HTMLInputElement>this.tossInTS.nativeElement).value,
        (<HTMLInputElement>this.decisionInTS.nativeElement).value,
        (<HTMLInputElement>this.oversInTS.nativeElement).valueAsNumber);
        this.router.navigate(['/admin/selectteam'], { relativeTo:this.route}
        )
      }
      chosenMod: string = ""; 
    }
    