import { createReducer, on, Action } from '@ngrx/store';
import { getLayoutData, updateLayoutData } from './actions';
import { LayoutState} from './../models/meta';
import { initialState } from './states';
import { environment } from './../../../environments/environment';


const _reducer = createReducer(
  initialState,
  on(getLayoutData, (state) => {
     return {
      ...state,
      isLoading: true
     }
  }),
  on(updateLayoutData, (state, action) => {
     return {
      ...state,
      brand: `${environment.baseUrl}${action.data.brand}`,
      footer: {
        ...state.footer,
        copyrightLink: action.data.copyright_link,
        copyrightText: action.data.copyright_text,
        logo: `${environment.baseUrl}${action.data.footer_img}`,
      },
      isLoading: false,
      isLoaded: false,
     }
  }),
);

export function reducer(state: LayoutState, action: Action): any {
  return _reducer(state, action);
}
