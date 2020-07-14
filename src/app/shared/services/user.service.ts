import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {}

    fetchUsers(): Observable<User[]> {
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
    }

    isLogedIn(): boolean {
      return localStorage.getItem('user-token') !== null;
    }
}
