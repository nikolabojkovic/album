import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    hideRequiredControl = new FormControl(false);
    floatLabelControl = new FormControl('auto');

    constructor() { }

    ngOnInit(): void { }

}
