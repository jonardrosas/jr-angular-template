import { createReducer, on, Action } from '@ngrx/store';
import { getObject } from './actions';
import { ContactState } from './../models'
import { initialState } from './states'
import { updateData } from '../../about/store';
import * as actions from './../store/actions'; 


export const featureKey = 'contacts';

const _reducer = createReducer(
  initialState,
  on(actions.getObject, (state) => { 
    return {
      ...state,
      isLoading: true,
    }
  }),
);

export function reducer(state: ContactState, action: Action) {
  return _reducer(state, action);
}
