import { createReducer, on } from '@ngrx/store';

import { showGrid, showList, } from './layout.actions';
import { layouts } from './layouts.enum';

const layoutFromStorage = localStorage.getItem('layout-view');
export const initialState = layoutFromStorage == null ? layouts.GridLayout : layoutFromStorage;

// tslint:disable-next-line:variable-name
const _layoutViewReducer = createReducer(initialState,
    on(showGrid, state => state = layouts.GridLayout),
    on(showList, state => state = layouts.ListLayout)
);

export function layoutViewReducer(state, action): any {
    const result = _layoutViewReducer(state, action);

    if (result) {
        localStorage.setItem('layout-view', result);
    }

    return result;
}
