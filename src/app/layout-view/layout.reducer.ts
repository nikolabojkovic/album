import { createReducer, on } from '@ngrx/store';

import { showGrid, showList, } from './layout.actions';
import { layouts } from './layouts.enum';

export const initialState = layouts.GridLayout;

// tslint:disable-next-line:variable-name
const _layoutViewReducer = createReducer(initialState,
    on(showGrid, state => state  = layouts.GridLayout),
    on(showList, state => state = layouts.ListLayout)
);

export function layoutViewReducer(state, action): any {
    return _layoutViewReducer(state, action);
}
