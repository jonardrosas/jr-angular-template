import { createReducer, on, Action } from '@ngrx/store';
import { getObject, updateData } from './actions';
import { initialState } from './states';
import { AboutState} from './../models'

export const featureKey = 'about';

const _reducer = createReducer(
    initialState,
    on(getObject, (state) => ({ ...state, isLoading: true })),
    on(updateData, (state, action) => {
        return {
            ...state,
            isLoaded: true,
            isLoading: false,
        }
    })
);


export function reducer(state: AboutState, action: Action) {
    return _reducer(state, action);
}