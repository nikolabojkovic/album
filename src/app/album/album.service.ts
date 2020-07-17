import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album.model';
import { Photo } from './photo.model';

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

    fetchPhotos(albumId: number, page: number, size: number): Observable<Photo[]> {
        const skip = (page - 1) * size;
        return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_start=${skip}&_limit=${size}`);
    }

}
