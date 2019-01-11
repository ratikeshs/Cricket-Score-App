import { Component, OnInit } from '@angular/core';
import { ScorecardService } from 'src/app/services/scorecard.service';
import { CommentryService } from 'src/app/services/commentry.service';
@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  
  scorecard;
  constructor(private score: CommentryService ) {
    this.scorecard=score.commentry;
    console.log(this.scorecard);
  }
  
  ngOnInit() {
  }
  
}
