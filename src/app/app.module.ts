import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { VotingComponent } from './voting/voting.component';
import { GetImageServiceService } from './get-image-service.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { TopNavComponent } from './top-nav/top-nav.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    SuggestionsComponent,
    VotingComponent,
    TopNavComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule.forRoot()
    NgbModule.forRoot(),
    RouterModule.forRoot([
    { path: '', component: WelcomeComponent },
    { path: 'start', component: HomeComponent }
    ])
  ],
  providers: [GetImageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
