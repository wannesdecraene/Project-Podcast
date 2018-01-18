import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../services/podcast.service';
import { MenubarModule, MenuItem } from 'primeng/primeng';
import { PassportService } from '../services/passport.service';

@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    items: MenuItem[];
    user: any;

    constructor(private podcastService: PodcastService, private passportService: PassportService) { }

    ngOnInit() {
        this.user = localStorage.user;

        var podcasts = new Array();
        this.podcastService.getUniquePodcasts().subscribe(d => {
            var arr = [];
            d.forEach(function (val) {
                podcasts.push({ label: val, routerLink: 'podcast/name/' + val })
            })
        })
        if(this.user){
            this.items = [
                {
                    label: 'Home',
                    routerLink: '/podcast'
                },
                {
                    label: 'Specific Podcast',
                    items: podcasts
                },
                {
                    label: 'Submit An Episode',
                    routerLink: '/add'
                }, 
                {
                    label: 'Top Episodes',
                    routerLink: '/TopEpisodes'
                },
                {
                    label: 'Random Episode',
                    routerLink: '/RandomEpisode'
                }
            ]
        } else {
            this.items = [
                {
                    label: 'Home',
                    routerLink: '/podcast'
                },
                {
                    label: 'Specific Podcast',
                    items: podcasts
                },
                {
                    label: 'Top Episodes',
                    routerLink: '/TopEpisodes'
                },
                {
                    label: 'Random Episode',
                    routerLink: '/RandomEpisode'
                }
            ]
        }
        

    }

    logout(){
        this.passportService.logout(JSON.parse(localStorage.user)).subscribe();
        localStorage.user = "";
        location.reload();
    }

}