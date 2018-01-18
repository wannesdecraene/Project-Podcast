import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';


@Injectable()
export class PassportService {

    constructor(private http: Http) { }

    isLoggedIn(): Observable<Object> {
        return this.http.get('https://podcasting-api.herokuapp.com/loggedin/')
            .map((res: Response) => { return res.json(); });
    }
    login(user) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('https://podcasting-api.herokuapp.com/login/',
            JSON.stringify(user), options).map((response: Response) => {
                return response.text();
            });
    }
    logout(user) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('https://podcasting-api.herokuapp.com/logout/',
            JSON.stringify(user), options).map((response: Response) => {
                return response.text();
            });
    }
    signin(user) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('https://podcasting-api.herokuapp.com/signup/',
            JSON.stringify(user), options).map((response: Response) => {
                return response.text();
            });
    }
}