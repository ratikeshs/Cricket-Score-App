import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommentryService } from 'src/app/services/commentry.service';
import { Team1Service } from 'src/app/services/team1.service';
import { Team2Service } from 'src/app/services/team2.service';
import { SelectteamComponent } from 'src/app/admin/selectteam/selectteam.component';
import { Commentry } from '../models/commentry';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
    commentryDetails:Array<Commentry>=[];
    t1;
    t2;
    t3;
    t4;
    t5;
    t6;
    t7;
    selectbowler;
    selectbowler3;
    ballnum = 1;
    teamplayer1;
    numofovers = 0;
    index = 0;
    
    
    @ViewChild('Batsman1') batsman1InTS: ElementRef;
    @ViewChild('Batsman2') batsman2InTS: ElementRef;
    @ViewChild('bowlerName') bowlerNameInTS: ElementRef;
    @ViewChild('ball') ballInTS: ElementRef;
    @ViewChild('runs') runsInTS: ElementRef;
    @ViewChild('wicketType') wicketTypeInTS: ElementRef;
    @ViewChild('over') overInTS: ElementRef;
    @ViewChild('description') descriptionInTS: ElementRef;
    @ViewChild('caughtBy') caughtByInTS: ElementRef;
    @ViewChild('runOutBy') runOutByInTS: ElementRef;
    
    
    
    public showType: boolean = false;
    public showNewBowler: boolean = true;
    public showNewBatsman1: boolean = true;
    public showNewBatsman2: boolean = true;
    public showRunOutBy: boolean= false;
    public showCatchBy: boolean = false;
    private txtBall: boolean = true;
    private txtOver: boolean = true;
    
    constructor(private comm: CommentryService,
        public selectBowler1: Team1Service,
        public selectBowler2:Team2Service
        ) { this.selectbowler = selectBowler1.team1players;
            this.selectbowler3=selectBowler2.team2players;
            console.log(this.selectbowler);
            console.log(this.selectbowler3);
        }
        
        ngOnInit() {
        }
        
        onSelectOfPossibility() {
            this.t1 = ((<HTMLInputElement>this.runsInTS.nativeElement).value);
            if (this.t1 == 'Wicket') {
                this.showType = !this.showType;
                this.showType = true;
            }
            else {
                this.showType = false;
            }
            
        }
        
        onSelectNewBatsman1(){
            this.t6= ((<HTMLInputElement>this.batsman1InTS.nativeElement).value);
        }
        
        
        onSelectNewBatsman2(){
            this.t7= ((<HTMLInputElement>this.batsman2InTS.nativeElement).value);
        }
        
        
        onSelectNewBowler(){
            this.t3 = ((<HTMLInputElement>this.bowlerNameInTS.nativeElement).value);
        }
        
        
        onSelectCatch(){
            this.t4 = ((<HTMLInputElement>this.caughtByInTS.nativeElement).value);
        }
        
        onSelectRunOut(){
            this.t5 = ((<HTMLInputElement>this.runOutByInTS.nativeElement).value);
        }
        
        
        onSelectOfWicket() {
            this.t2 = ((<HTMLInputElement>this.wicketTypeInTS.nativeElement).value);
            if (this.t2 == 'Catch' ) {
                this.showCatchBy = !this.showCatchBy;
            }
            
            else if(this.t2 == 'Runout'){
                this.showRunOutBy =!this.showRunOutBy;
            }
            
            else {
                this.showCatchBy = false;
                this.showRunOutBy=false;
            }
            
        }
        
        onAddScoreClick() {
            this.ballnum++;
            if (this.ballnum > 6) {
                this.ballnum = 1;
                this.numofovers++;
                this.showNewBowler = true; 
            }
            if (this.t1 == 'Wicket') {
                this.showNewBatsman2 = true;
            }
            else {
                this.showNewBowler = false;
            }
            
            this.showType = false;
            this.showCatchBy = false;
            this.showRunOutBy=false;
            
            const Batsman1Value = this.batsman1InTS ? (<HTMLSelectElement>this.batsman1InTS.nativeElement).value : '';
            const Batsman2Value = this.batsman2InTS ? (<HTMLSelectElement>this.batsman2InTS.nativeElement).value : '';
            const wicketTypeValue = this.wicketTypeInTS ? (<HTMLSelectElement>this.wicketTypeInTS.nativeElement).value : '';
            const bowlerNamevalue = this.bowlerNameInTS ? (<HTMLSelectElement>this.bowlerNameInTS.nativeElement).value: '';
            const caughtByvalue = this.caughtByInTS ? (<HTMLSelectElement>this.caughtByInTS.nativeElement).value:'';
            const runOutByvalue = this.runOutByInTS ? (<HTMLSelectElement>this.runOutByInTS.nativeElement).value:'';
            
            console.log(wicketTypeValue);
            
            this.comm.addCommentry(
                Batsman1Value,
                Batsman2Value,
                bowlerNamevalue,
                (<HTMLInputElement>this.ballInTS.nativeElement).value,
                (<HTMLInputElement>this.runsInTS.nativeElement).value,
                wicketTypeValue,
                (<HTMLInputElement>this.overInTS.nativeElement).value,
                (<HTMLTextAreaElement>this.descriptionInTS.nativeElement).value,
                caughtByvalue,
                runOutByvalue);      
            }
            
            
        }