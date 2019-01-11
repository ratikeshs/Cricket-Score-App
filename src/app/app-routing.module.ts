import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/admin/admin.component';
import { ScorecardComponent } from 'src/app/scorecard/scorecard.component';
import {NewmatchComponent} from './admin/newmatch/newmatch.component';
import { SelectteamComponent } from './admin/selectteam/selectteam.component';
import { SummaryComponent } from 'src/app/summary/summary.component';
import { CommentryComponent } from './commentry/commentry.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'scorecard',
    component:ScorecardComponent,
  },
  { path: 'summary', component: SummaryComponent},
  { path: 'commentry', component: CommentryComponent},
  {
    path: 'admin',
    component:AdminComponent,
    children: [
      { path: 'newmatch', component: NewmatchComponent },
      {path: 'selectteam', component:SelectteamComponent} 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
