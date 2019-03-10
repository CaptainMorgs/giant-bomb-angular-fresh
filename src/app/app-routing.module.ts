import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { InstagramTimelineComponent } from './instagram-timeline/instagram-timeline.component';

const routes: Routes = [
  {
    path: 'twitter_timeline/:name',
    component: TwitterTimelineComponent
  },
  {
    path: 'twitter_timeline',
    component: TwitterTimelineComponent
  },
  {
    path: 'instagram_timeline',
    component: InstagramTimelineComponent
  },
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
