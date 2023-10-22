import { createSelector } from '@ngrx/store';
import { featureKey } from './reducers';
import { ContactState } from './../models'

interface PageState {
  contacts: ContactState;
}

export const selectObject = (state: PageState) => state.contacts;
