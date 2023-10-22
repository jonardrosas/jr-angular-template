import { createAction, props } from '@ngrx/store';
import { ContactState } from './../models'

export const getObject = createAction('[Contact Component] Get Data');
export const updateObject = createAction('[Contact Component] Update Data', props<{data: ContactState}>());
