import { Injectable } from '@angular/core';
import { Commentry } from 'src/app/models/commentry';
@Injectable({
  providedIn: 'root'
})
export class CommentryService {
  commentry:Array<Commentry>=[];
  
  constructor() { }
  
  addCommentry( 
    Batsman1:string,
    Batsman2:string,
    bowlerName:string,
    ball:any,
    runs:any,
    wicketType:string,
    over:any,
    description:string,
    caughtBy?:string,
    runOutBy?:string){
      this.commentry.push(new Commentry(    
        Batsman1,Batsman2,bowlerName,ball,runs,wicketType,over,description,caughtBy,runOutBy));
        console.log(this.commentry);
    }
      
    
}
    