import { Component, OnInit } from '@angular/core';
import { PassportService } from '../services/passport.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    user: any = {};
    error: boolean = false;

    constructor(private passportService: PassportService, private router: Router) { }

    ngOnInit() {

    }

    onSubmit() {
        this.passportService.signin(this.user).subscribe(d => {
            if (d != 'null') {
                localStorage.user = '{ "username": "' + this.user.username + '",  "password": "' + this.user.password + '" }'
                this.router.navigate(["/"])
                location.reload();
            } else {
                this.error = true;
            }
        });
        console.log(this.user);
    }
}