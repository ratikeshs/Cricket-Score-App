import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Team1 } from 'src/app/models/team1';
import { Team2 } from 'src/app/models/team2';
import { Team1Service } from 'src/app/services/team1.service';
import { Team2Service } from 'src/app/services/team2.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-selectteam',
  templateUrl: './selectteam.component.html',
  styleUrls: ['./selectteam.component.css']
})
export class SelectteamComponent implements OnInit {
  
  teamName;
  batSelect;
  ballSelect;
  pname;
  ind=1;
  ind2=1;
  playername:Array<Team1>=[];
  playername2:Array<Team2>=[];
  
  @ViewChild('name1') name1InTS: ElementRef;
  @ViewChild('name2') name2InTS: ElementRef;
  @ViewChild('role1') professional1InTs: ElementRef;
  @ViewChild('role2') profession2InTS: ElementRef;
  
  constructor( private teamplayer1:Team1Service,
    private teamplayer2:Team2Service,
    public matchserv: MatchService, private router:Router,
    private route:ActivatedRoute,
    ) { 
      this.teamName = matchserv.matcH;
      this.batSelect=matchserv.batSelcectd1;
      this.ballSelect=matchserv.bowlSelected1;
      console.log(this.teamName);
    }
    
    ngOnInit() {
      console.log(this.matchserv.random);
      console.log(this.matchserv.batSelcectd1);
      console.log(this.matchserv.bowlSelected1);
    }
    
    onAddPlayer1Click(){
      this.teamplayer1.addPlayers1(this.playername);
      this.ind++;
      if(this.ind<=12)
      {
        this.teamplayer1.addTeam1((<HTMLInputElement>this.name1InTS.nativeElement).value,
        (<HTMLInputElement>this.professional1InTs.nativeElement).value); 
        this.name1InTS.nativeElement.value="";
        this.professional1InTs.nativeElement.value="";
      }
    }
    
    
    onAddPlayer2Click(){
      this.teamplayer2.addPlayers2(this.playername2);
      this.ind2++;
      if(this.ind2<=12)
      {
        this.teamplayer2.addTeam2((<HTMLInputElement>this.name2InTS.nativeElement).value,
        (<HTMLInputElement>this.profession2InTS.nativeElement).value);
        this.name2InTS.nativeElement.value="";
        this.profession2InTS.nativeElement.value="";
      }
    }
    
    
    onSecondtFinalTeam()
    {
      this.teamplayer2.addPlayers2(this.playername2);
      
    }
    onReadyToPlayClick(){
      this.router.navigate(['/summary'],{relativeTo:this.route});
    }
    
}
  