import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../services/podcast.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './podcast-episodes.component.html'
})
export class PodcastEpisodesComponent implements OnInit {

    id: any;
    episodes: any;
    private sub: any;
    podcastName:any;

    constructor(private podcastService: PodcastService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.getEpisodesForPodcast(this.id);
    }

    getEpisodesForPodcast(name) {
        this.podcastService.getEpisodesByPodcast(name).subscribe(d => {
            this.episodes = d
            this.podcastName = d[0].podcast;
        });
    }
}