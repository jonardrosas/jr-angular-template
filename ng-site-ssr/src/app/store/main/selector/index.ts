import { createSelector } from '@ngrx/store';
import { AppState, LayoutState } from './../../../models'


export const selectRoot = (state: AppState) => state.root;

export const selectMenu = createSelector(
  selectRoot,
  (state: LayoutState) => state.menus
);


export const selectFooterData = createSelector(
  selectRoot,
  (state: LayoutState) => state.footer
);