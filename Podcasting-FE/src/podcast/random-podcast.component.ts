import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../services/podcast.service';

@Component({
    templateUrl: './random-podcast.component.html'
})
export class RandomPodcastComponent implements OnInit {

    podcast: any;

    constructor(private podcastService: PodcastService) { }

    ngOnInit() {
        this.getRandomEp();
    }

    getRandomEp() {
        this.podcastService.getRandomEpisode().subscribe(d => {
            this.podcast = d[0]
            console.log(d[0])
        } );
    }
}