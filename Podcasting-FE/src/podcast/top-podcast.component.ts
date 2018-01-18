import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../services/podcast.service';

@Component({
    templateUrl: './top-podcast.component.html'
})
export class TopPodcastComponent implements OnInit {

    episodes: any;

    constructor(private podcastService: PodcastService) { }

    ngOnInit() {
        this.getTopEpisodes();
    }

    getTopEpisodes() {
        this.podcastService.getTopEpisodes().subscribe(d => this.episodes = d);
    }
}