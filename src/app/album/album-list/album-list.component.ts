import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AlbumService } from '../album.service';
import { UserService } from '../../shared/services/user.service';

import { User } from '../../shared/models/user';
import { Album } from '../album.model';
import { Layouts, layouts } from '../../layout-view/layouts.enum';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: [ './album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

    lastName = '';
    albums: Album[];
    user: User;

    layoutState$: Observable<string>;
    layout: string;
    layouts: Layouts = layouts;

    page = 1;
    pageSize = 10;

    constructor(private albumService: AlbumService,
                private userService: UserService,
                private store: Store<{ layoutView: string }>) {}

    ngOnInit(): void {
        this.layoutState$ = this.store.pipe(select('layoutView'));
        this.layoutState$.subscribe(state => this.layout = state);

        this.userService.getCurrentUser().subscribe((user: User) => {
            const names = user.name.split(' ');
            if (names.length > 1) {
                this.lastName = names[1];
            }

            this.user = user;
            this.albumService.fetchAlbums(user.id, this.page, this.pageSize)
                .subscribe((albums: Album[]) => this.albums = albums);
        });
    }

    onScroll(): void {
        this.page = this.page + 1;
        this.albumService.fetchAlbums(this.user.id, this.page, this.pageSize)
            .subscribe((albums: Album[]) => this.albums = this.albums.concat(albums));
    }
}
