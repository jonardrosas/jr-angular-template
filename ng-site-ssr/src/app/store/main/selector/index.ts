import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LayoutState } from './../../../models'


export const selectRoot = createFeatureSelector<LayoutState>('root');

export const selectMenu = createSelector(
  selectRoot,
  (state: LayoutState) => state.menus
);


export const selectFooterData = createSelector(
  selectRoot,
  (state: LayoutState) => state.footer
);