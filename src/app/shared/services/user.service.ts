import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {}

    fetchUsers(): Observable<User[]> {
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
    }

    isLogedIn(): boolean {
      return localStorage.getItem('user') !== null;
    }

    getCurrentUser(): Observable<User> {
      const id = localStorage.getItem('user');

      return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
    }
}
