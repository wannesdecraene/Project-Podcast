import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../services/podcast.service';
import { PassportService } from '../services/passport.service';

@Component({
    templateUrl: './podcast.component.html'
})
export class PodcastComponent implements OnInit {

    episodes: any;

    constructor(private podcastService: PodcastService, private passportService: PassportService) { }

    ngOnInit() {
        this.getAllEpisodes();
    }

    getAllEpisodes() {
        this.podcastService.getEpisodes().subscribe(d => this.episodes = d);
    }
}