import { Component, OnInit } from '@angular/core';
import {CommentryService } from 'src/app/services/commentry.service';
import {ReversePipe} from 'ngx-pipes';

@Component({
  selector: 'app-commentry',
  templateUrl: './commentry.component.html',
  styleUrls: ['./commentry.component.css'],
  providers: [ReversePipe]
})
export class CommentryComponent implements OnInit {
  
  commentryData;
  constructor( public commserv:CommentryService,
    private reversePipe: ReversePipe
    ) {  this.commentryData=commserv.commentry 
  }
    

   ngOnInit() {
      console.log(this.commentryData);
    }  
}
  
  
  