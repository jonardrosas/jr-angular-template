import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LayoutState } from './../../../models'
import { mainAppKey } from './../reducer'


export const selectRoot = createFeatureSelector<LayoutState>(mainAppKey);

export const selectMenu = createSelector(
  selectRoot,
  (state: LayoutState) => state.menus
);


export const selectFooterData = createSelector(
  selectRoot,
  (state: LayoutState) => state.footer
);