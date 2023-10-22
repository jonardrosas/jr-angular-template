import { createAction, props } from '@ngrx/store';
import { ResponseLayoutState } from './../models/meta';

export const getLayoutData = createAction('[Layout] get initial data');
export const updateLayoutData = createAction('[Layout] update initial data', props<{data: ResponseLayoutState}>());
