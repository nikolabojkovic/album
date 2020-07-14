import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';

@Component({
    selector: 'app-logiin',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        username: new FormControl('', [
          Validators.required
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ])
      });
      redirectUrl: string;

    constructor(private loginService: UserService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        // if (localStorage.getItem('user-token') !== null) {
        //     this.router.navigate(['album-list']);
        // }

        this.route.queryParams
            .subscribe(params => this.redirectUrl = params.return || 'album-list');
     }

    onSubmit(): void {
        this.loginService.fetchUsers()
            .subscribe((users: User[]) => {
                if (users.some(user => user.email === this.loginForm.value.email && user.username === this.loginForm.value.username)) {
                    localStorage.setItem('user-token', this.loginForm.value.email + '-' + this.loginForm.value.user);
                    console.log('Login has been successfull.');
                    this.router.navigateByUrl(this.redirectUrl);
                }

                console.log(users);
            },
            error => console.error(error));
    }
}
