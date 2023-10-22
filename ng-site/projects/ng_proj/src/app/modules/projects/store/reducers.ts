import { createReducer, on, Action } from '@ngrx/store';
import { APPCONFIG } from './../../configs';
import * as model from './../model';
import { getPlatform } from '@angular/core';
import { initialState } from './state';

export const featureKey = 'projects';

const _reducer = createReducer(
  initialState,
);

export function reducer(state: model.ProjectState, action: Action): any {
  return _reducer(state, action);
}
