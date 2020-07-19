import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album.model';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Layouts, layouts } from '../../layout-view/layouts.enum';
import { Router } from '@angular/router';
import { Photo } from '../photo.model';
import { AlbumService } from '../album.service';

@Component({
    selector: 'app-album-details',
    templateUrl: './album-details.component.html',
    styleUrls: [ './album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

    @Input() album: Album;
    albumThumbnail: Photo;

    layoutState$: Observable<string>;
    layout: string;
    layouts: Layouts = layouts;

    constructor(private store: Store<{ layoutView: string }>,
                private albumService: AlbumService,
                private router: Router) { }

    ngOnInit(): void {
        this.layoutState$ = this.store.pipe(select('layoutView'));
        this.layoutState$.subscribe(state => this.layout = state);

        this.albumService.getAlbumThumbnail(this.album.id)
            .subscribe(response => this.albumThumbnail = response);
    }

    openAlbum(): void {
        this.router.navigate(['/albums', this.album.id]);
    }
}
