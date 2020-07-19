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
    photos: Photo[] = [];

    layout: string;
    layouts: Layouts = layouts;
    searchInput: string;

    backUrl: string;
    page = 1;
    pageSize = 10;

    constructor(private albumService: AlbumService,
                private store: Store<{ layoutView: string, search: string }>,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.store.pipe(select('layoutView'))
            .subscribe(state => this.layout = state);

        this.store.pipe(select('search'))
            .subscribe(input => {
                this.searchInput = input;

                if (this.album.id) {
                    this.filterPhotos(this.album.id, input);
                }
            });

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
        this.albumService.filterPhotos(this.album.id, this.page, this.pageSize, this.searchInput)
            .subscribe((photos: Photo[]) => this.photos = this.photos.concat(photos),
                        error => console.error(error));
    }

    onDeletePhoto(photo: Photo): void {
        this.photos = this.photos.filter(p => p.id !== photo.id);
    }

    filterPhotos(albumId: number, title: string): void {
        this.page = 1;
        this.albumService.filterPhotos(albumId, this.page, this.pageSize, title)
            .subscribe((photos: Photo[]) => this.photos = photos,
                        error => console.error(error));
    }
}
