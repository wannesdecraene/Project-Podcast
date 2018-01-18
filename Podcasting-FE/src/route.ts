import { Routes } from '@angular/router';
import { PodcastComponent } from './podcast/podcast.component';
import { AddPodcastComponent } from './podcast/add-podcast.component';
import { PodcastDetailComponent } from './podcast/podcast-detail.component';
import { RandomPodcastComponent } from './podcast/random-podcast.component';
import { PodcastEpisodesComponent } from './podcast/podcast-episodes.component';
import { SignInComponent } from './logging/signin.component';
import { LogInComponent } from './logging/login.component';
import { TopPodcastComponent } from './podcast/top-podcast.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/podcast',
        pathMatch: 'full'
    },
    {
        path: 'podcast',
        component: PodcastComponent,
        canActivate: []
    },
    {
        path: 'add',
        component: AddPodcastComponent,
        canActivate: []
    },
    {
        path: 'podcast',
        component: PodcastComponent,
        canActivate: []
    },
    {
        path: 'podcast/:id',
        component: PodcastDetailComponent,
        canActivate: []
    },
    {
        path: 'RandomEpisode',
        component: RandomPodcastComponent,
        canActivate: []
    },
    {
        path: 'podcast/name/:id',
        component: PodcastEpisodesComponent,
        canActivate: []
    },
    {
        path: 'signin',
        component: SignInComponent,
        canActivate: []
    },
    {
        path: 'login',
        component: LogInComponent,
        canActivate: []
    },
    {
        path: 'TopEpisodes',
        component: TopPodcastComponent,
        canActivate: []
    },
]