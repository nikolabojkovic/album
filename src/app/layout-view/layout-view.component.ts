import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { showGrid, showList } from './layout.actions';

@Component({
    selector: 'app-layout-view',
    templateUrl: './layout-view.component.html',
    styleUrls: ['./layout-view.component.scss']
})
export class LayoutViewComponent implements OnInit {

    constructor(private store: Store<{ layoutView: string }>) { }

    ngOnInit(): void { }

    toGrid(): void {
        this.store.dispatch(showGrid());
    }

    toList(): void {
        this.store.dispatch(showList());
    }
}
