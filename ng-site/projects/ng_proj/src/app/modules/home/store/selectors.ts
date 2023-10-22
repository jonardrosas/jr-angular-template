import { createSelector } from '@ngrx/store';
import { HomeState } from '../models/home.interface';

interface HomePageState {
  home: HomeState;
}

export const selectHomeObject = (state: HomePageState) => state.home;
export const selectHomeMeta = createSelector(selectHomeObject, (data) => data.meta);
export const selectHeroData = createSelector(selectHomeObject, (data) => data.hero);
