import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../photo.model';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Layouts, layouts } from '../../layout-view/layouts.enum';

@Component({
    selector: 'app-photo-details',
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

    @Input() photo: Photo;
    @Output() deletePhoto = new EventEmitter<Photo>();

    layoutState$: Observable<string>;
    layout: string;
    layouts: Layouts = layouts;

    constructor(private store: Store<{ layoutView: string }>) { }

    ngOnInit(): void {
        this.layoutState$ = this.store.pipe(select('layoutView'));
        this.layoutState$.subscribe(state => this.layout = state);
    }

    delete(): void {
        this.deletePhoto.emit(this.photo);
    }
}
