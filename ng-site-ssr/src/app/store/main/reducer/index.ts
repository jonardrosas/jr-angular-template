import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state'
import * as actions from '../action';

export const mainAppKey = 'root'

export const mainAppReducer = createReducer(
    initialState,
    on(actions.getMenus, (state) => ({
        ...state,
        isLoading: true,
        isLoaded: false,
    })),
    on(actions.setMenus, (state) => ({
        ...state,
        isLoading: false,
        isLoaded: true,
    })),
    on(actions.getFooter, (state) => ({
        ...state,
        isLoading: true,
        isLoaded: false,
    })),
    on(actions.setFooter, (state) => ({
        ...state,
        isLoading: false,
        isLoaded: true,
    })),
)