import { Component, OnInit } from '@angular/core';
import { PassportService } from '../services/passport.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LogInComponent implements OnInit {
    
    user: any = {};
    error: boolean = false;

    constructor(private passportService: PassportService, private router: Router) { }

    ngOnInit() {
    }

    onSubmit(){
        this.passportService.login(this.user).subscribe(
            d => {
                localStorage.user = '{ "username": "' + this.user.username + '",  "password": "' + this.user.password + '" }'
                this.router.navigate(["/"])
                location.reload();
            },
            err => {
                this.error = true;
            }
        );
        console.log(this.user);

    }
}