import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { showGrid, showList } from './layout.actions';

import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-layout-view',
    templateUrl: './layout-view.component.html',
    styleUrls: ['./layout-view.component.scss']
})
export class LayoutViewComponent implements OnInit {
    faThLarge = faThLarge;
    faThList = faThList;

    constructor(private store: Store<{ layoutView: string }>) { }

    ngOnInit(): void { }

    toGrid(): void {
        this.store.dispatch(showGrid());
    }

    toList(): void {
        this.store.dispatch(showList());
    }
}
