import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-back-link',
    templateUrl: './back-link.component.html',
    styleUrls: ['./back-link.component.scss']
})
export class BackLinkComponent implements OnInit {

    @Input() text = 'povratak';
    @Input() backUrl: string;

    constructor(private router: Router) { }

    ngOnInit(): void { }

    back(): void {
        this.router.navigateByUrl(this.backUrl);
    }
}
