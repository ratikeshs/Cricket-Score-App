import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Team1 } from 'src/app/models/team1';
import { Team2 } from 'src/app/models/team2';
import { Team1Service } from 'src/app/services/team1.service';
import { Team2Service } from 'src/app/services/team2.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  team1palyers;
  team1palyer:Team1;
  team2palyers;
  team2palyer:Team2;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,team1Service:Team1Service,
    team2Service:Team2Service) {
      this.team1palyers=team1Service.team1players;
      this.team2palyers=team2Service.team2players;
    }
    
    ngOnInit() {
    }
    
    onNewButtonClick() {
      this.router.navigate([ '/admin/newmatch'], { relativeTo:this.route });
    }
    
}
  