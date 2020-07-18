import { createAction, props } from '@ngrx/store';

export const search = createAction('[Search Component] search', props<{input: string}>());
