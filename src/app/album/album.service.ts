import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album.model';

@Injectable()
export class AlbumService {

    constructor(private http: HttpClient) {}

    fetchAlbums(userId: number): Observable<Album[]> {
        return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    }

}
