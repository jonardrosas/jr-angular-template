import { createAction, props } from '@ngrx/store';


export const getObject = createAction('[Home Component] Get Hero Object');
export const setObject = createAction('[Home Component] Set Hero Object', props<{data: any}>());
