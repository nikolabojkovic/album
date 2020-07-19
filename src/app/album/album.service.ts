import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album.model';
import { Photo } from './photo.model';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
export class AlbumService {

    constructor(private http: HttpClient) {}

    fetchAlbums(userId: number, page: number, size: number): Observable<Album[]> {
        const skip = (page - 1) * size;
        return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${userId}&_start=${skip}&_limit=${size}`);
    }

    getAlbumById(albumId: number): Observable<Album> {
        return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
    }

    getAlbumThumbnail(albumId: number): Observable<Photo> {
        return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_start=0&_limit=1`)
            .pipe(map((response: Photo[]) => response[0]));
    }

    fetchPhotos(albumId: number, page: number, size: number): Observable<Photo[]> {
        const skip = (page - 1) * size;
        return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_start=${skip}&_limit=${size}`);
    }

    filterPhotos(albumId: number, page: number, size: number, title: string): Observable<Photo[]> {
        const skip = (page - 1) * size;
        return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_start=${skip}&_limit=${size}&title_like=${title}`);
    }
}
