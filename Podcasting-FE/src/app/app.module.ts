import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import {MenubarModule,MenuItem, MenuModule, ButtonModule, DataTableModule, SharedModule, PanelModule, MessageModule} from 'primeng/primeng';


import { AppComponent } from './app.component';
import { ChatComponent } from '../chat/chat.component';
import { ChatService } from '../services/chat.service';
import { PodcastService } from '../services/podcast.service';
import { HeaderComponent } from '../header/header.component';
import { PodcastComponent } from '../podcast/podcast.component';
import { PodcastDetailComponent } from '../podcast/podcast-detail.component';
import { AddPodcastComponent } from '../podcast/add-podcast.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../route';
import { RandomPodcastComponent } from '../podcast/random-podcast.component';
import { PodcastEpisodesComponent } from '../podcast/podcast-episodes.component';
import { SignInComponent } from '../logging/signin.component';
import { LogInComponent } from '../logging/login.component';
import { TopPodcastComponent } from '../podcast/top-podcast.component';
import { PassportService } from '../services/passport.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HeaderComponent,
    PodcastComponent,
    PodcastDetailComponent,
    AddPodcastComponent,
    RandomPodcastComponent,
    PodcastEpisodesComponent,
    SignInComponent,
    LogInComponent,
    TopPodcastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MenuModule,
    MenubarModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    PanelModule,
    BrowserAnimationsModule,
    MessageModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ChatService,
    PodcastService,
    PassportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
