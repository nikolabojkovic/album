import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { search } from './search.actions';
import { Subject } from 'rxjs';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    modelChanged: Subject<string> = new Subject<string>();

    constructor(private store: Store<{ layoutView: string }>) {
        this.modelChanged
        .pipe(debounceTime(300))
        .subscribe(input => this.store.dispatch(search({ input })));
     }

    ngOnInit(): void { }

    onSearch($event: any): void {
        this.modelChanged.next($event.target.value);
    }
}
