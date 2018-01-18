import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../services/podcast.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './podcast-detail.component.html'
})
export class PodcastDetailComponent implements OnInit {

    id: any;
    podcast: any;
    private sub: any;
    constructor(private podcastService: PodcastService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.getPodcastById(this.id);
    }

    getPodcastById(id){
        this.podcastService.getEpisodeById(id).subscribe(d => {
            this.podcast = d; 
            console.log(d)
        });
    }
    voteForEpisode(){
        this.podcastService.castVote(this.podcast).subscribe();
    }
}