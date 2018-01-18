import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../services/podcast.service';

@Component({
    templateUrl: './add-podcast.component.html'
})
export class AddPodcastComponent implements OnInit {

    podcast: any = {};

    constructor(private podcastService: PodcastService) { }

    ngOnInit() {

    }

    onSubmit(){
        this.podcastService.createEpisode(this.podcast).subscribe();
    }
}