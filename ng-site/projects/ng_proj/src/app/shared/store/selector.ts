import { LayoutState } from './../models/meta';

export interface LayoutPageState {
  layout: LayoutState;
}

export const selectInitialData = (state: LayoutPageState): LayoutState => {
  return state.layout;
};
