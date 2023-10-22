import { createReducer, on, Action } from '@ngrx/store';
import { getObject, setObject } from './actions';
import { HomeState } from '../models/home.interface';
import { environment } from './../../../../environments/environment';
import { initialState } from './initial-state';

export const featureKey = 'home';

const _reducer = createReducer(
  initialState,
  on(getObject, (state) => {
    return {
      ...state,
      isLoaded: false,
      isLoading: true
    }
  }),
   on(setObject, (state, {data}) => {
    if(data) {
      const final_data = {
        ...state,
        isLoaded: true,
        isLoading: false,
      }
      return final_data
    }else {
      return {...state}
    }
  }),
);

export function reducer(state: HomeState, action: Action): any {
  return _reducer(state, action);
}
