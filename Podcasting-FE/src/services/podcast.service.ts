import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { IPodcast } from '../models/podcast.model';


@Injectable()
export class PodcastService {

    constructor(private http: Http) { }

    getEpisodes(): Observable<IPodcast[]> {
        return this.http.get('https://podcasting-api.herokuapp.com/podcast/')
            .map((res: Response) => { return res.json(); });
    }
    getEpisodeById(id): Observable<IPodcast> {
        return this.http.get('https://podcasting-api.herokuapp.com/podcast/getById/' + id)
            .map((res: Response) => { return res.json(); });
    }
    getEpisodesByPodcast(podcast): Observable<IPodcast[]> {
        return this.http.get('https://podcasting-api.herokuapp.com/podcast/getpodcast/' + podcast)
            .map((res: Response) => { return res.json(); });
    }
    getTopEpisodes(): Observable<IPodcast[]> {
        return this.http.get('https://podcasting-api.herokuapp.com/podcast/getTopPodcasts/')
            .map((res: Response) => { return res.json(); });
    }
    getRandomEpisode(): Observable<IPodcast> {
        return this.http.get('https://podcasting-api.herokuapp.com/podcast/getRandomEpisode/')
            .map((res: Response) => { return res.json(); });
    }
    getUniquePodcasts(): Observable<Object[]> {
        return this.http.get('https://podcasting-api.herokuapp.com/podcast/getAllPodcasts/')
            .map((res: Response) => { return res.json(); });
    }
    createEpisode(episode) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('https://podcasting-api.herokuapp.com/podcast/',
            JSON.stringify(episode), options).map((response: Response) => {
                return response.text();
            });
    }
    castVote(episode) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('https://podcasting-api.herokuapp.com/podcast/' + episode._id,
            JSON.stringify(episode), options).map((response: Response) => {
                return response.text();
            });
    }
}