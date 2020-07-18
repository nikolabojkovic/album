import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { layouts, Layouts } from '../../layout-view/layouts.enum';
import { Photo } from '../photo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

    album: Album = new Album();
    photos: Photo[];
    layoutState$: Observable<string>;
    layout: string;
    layouts: Layouts = layouts;
    backUrl: string;
    page = 1;
    pageSize = 10;

    constructor(private albumService: AlbumService,
                private store: Store<{ layoutView: string }>,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.layoutState$ = this.store.pipe(select('layoutView'));
        this.layoutState$.subscribe(state => this.layout = state);
        const albumId = parseInt(this.route.snapshot.paramMap.get('albumId'), 10);
        this.backUrl = `/albums`;
        this.albumService.getAlbumById(albumId).subscribe((album: Album) => this.album = album,
            error => console.error(error));

        this.albumService.fetchPhotos(albumId, this.page, this.pageSize)
            .subscribe((photos: Photo[]) => this.photos = photos,
                        error => console.error(error));
    }

    onScroll(): void {
        this.page = this.page + 1;
        this.albumService.fetchPhotos(this.album.id, this.page, this.pageSize)
            .subscribe((photos: Photo[]) => this.photos = this.photos.concat(photos),
                        error => console.error(error));
    }

    onDeletePhoto(photo: Photo): void {
        this.photos = this.photos.filter(p => p.id !== photo.id);
    }
}
