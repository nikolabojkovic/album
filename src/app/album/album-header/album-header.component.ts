import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-album-header',
    templateUrl: './album-header.component.html',
    styleUrls: ['./album-header.component.scss']
})
export class AlbumHeaderComponent implements OnInit {

    @Input() title: string;

    constructor() { }

    ngOnInit(): void { }
}
