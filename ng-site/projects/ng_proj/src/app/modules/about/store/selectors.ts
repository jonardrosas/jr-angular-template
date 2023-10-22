import { createSelector } from '@ngrx/store';
import { featureKey } from './reducers'
import { AboutState  } from '../models';

interface PageState {
    about: AboutState
}

export const selectObject = (state: PageState) => state.about;
