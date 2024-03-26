import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state'
import * as actions from '../action';
import { LayoutState } from '../../../models';

export const mainAppKey = 'root'

export const mainAppReducer = createReducer(
    initialState,
    on(actions.getMenus, (state): LayoutState => ({
        ...state,
        isLoading: true,
        isLoaded: false,
    })),
    on(actions.setMenus, (state): LayoutState => ({
        ...state,
        isLoading: false,
        isLoaded: true,
    })),
    on(actions.getFooter, (state): LayoutState => ({
        ...state,
        isLoading: true,
        isLoaded: false,
    })),
    on(actions.setFooter, (state): LayoutState => ({
        ...state,
        isLoading: false,
        isLoaded: true,
    })),
)