import { createReducer, on, Action } from '@ngrx/store';

import { search } from './search.actions';

export const initialState = '';

// tslint:disable-next-line:variable-name
const _searchReducer = createReducer(initialState,
    on(search, (state, { input }) => (input))
);

export function searchReducer(state: string | undefined, action: Action): any {
    const result = _searchReducer(state, action);
    return result;
}
