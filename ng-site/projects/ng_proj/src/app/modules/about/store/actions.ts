import { createAction, props } from '@ngrx/store';
import { AboutState } from './../models'


export const getObject = createAction('[About Component] Get Data');
export const updateData = createAction('[About Component] Update Data', props<{data: AboutState }>());