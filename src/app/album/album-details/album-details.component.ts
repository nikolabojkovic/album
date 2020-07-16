import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album.model';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Layouts, layouts } from '../../layout-view/layouts.enum';

@Component({
    selector: 'app-album-details',
    templateUrl: './album-details.component.html',
    styleUrls: [ './album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

    @Input() album: Album;

    layoutState$: Observable<string>;
    layout: string;
    layouts: Layouts = layouts;

    constructor(private store: Store<{ layoutView: string }>) { }

    ngOnInit(): void {
        this.layoutState$ = this.store.pipe(select('layoutView'));
        this.layoutState$.subscribe(state => this.layout = state);
     }
}
