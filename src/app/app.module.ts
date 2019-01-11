import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { NewmatchComponent } from './admin/newmatch/newmatch.component';
import { SelectteamComponent } from './admin/selectteam/selectteam.component';
import { SummaryComponent } from './summary/summary.component';
import { CommentryComponent } from './commentry/commentry.component';
import {NgPipesModule} from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    ScorecardComponent,
    NewmatchComponent,
    SelectteamComponent,
    SummaryComponent,
    CommentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
