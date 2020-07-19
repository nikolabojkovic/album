import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import { Photo } from '../photo.model';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Layouts, layouts } from '../../layout-view/layouts.enum';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: 'app-photo-details',
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {
    faTrash = faTrashAlt;

    @Input() photo: Photo;
    @Input() photoIndex: number;
    @Output() deletePhoto = new EventEmitter<Photo>();
    @Output() openPhoto = new EventEmitter<number>();

    layoutState$: Observable<string>;
    layout: string;
    layouts: Layouts = layouts;

    constructor(private store: Store<{ layoutView: string }>,
                private dialog: MatDialog) { }

    ngOnInit(): void {
        this.layoutState$ = this.store.pipe(select('layoutView'));
        this.layoutState$.subscribe(state => this.layout = state);
    }

    delete(): void {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
             data: { text : `(${this.photo.title})` }
        });

        dialogRef.afterClosed().subscribe(confirmed => {
            if (confirmed) {
               this.deletePhoto.emit(this.photo);
            }
        });
    }

    open(): void {
        this.openPhoto.emit(this.photoIndex);
    }
}
