import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterService } from 'ng2-twitter';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatTableModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from "@angular/material";
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { StatsComponent } from './stats/stats.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { SoundBoardComponent } from './sound-board/sound-board.component';
import { TwitterStreamComponent } from './twitter-stream/twitter-stream.component';
import { SocketService } from './socket-service.service';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';
import { RedditComponent } from './reddit/reddit.component';
import { TwitterComponent } from './twitter/twitter.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TweetTestComponent } from './tweet-test/tweet-test.component';
import { PodcastTimestampComponent } from './podcast-timestamp/podcast-timestamp.component';


@NgModule({
  declarations: [
    AppComponent,
    TwitterTimelineComponent,
    StatsComponent,
    SoundBoardComponent,
    TwitterStreamComponent,
    RedditComponent,
    TwitterComponent,
    TweetTestComponent,
    PodcastTimestampComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    NgxTwitterTimelineModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    NgxChartsModule,
    MatExpansionModule,
    MatTabsModule,
    MatSelectModule,
    NgxLinkifyjsModule.forRoot(),
    MatGridListModule,
    MatTableModule,
    MatInputModule

  ],
  providers: [TwitterService, HttpClientModule, SocketService],
  bootstrap: [AppComponent]
})


export class AppModule {
}
