import { createFeature, createReducer, on } from '@ngrx/store';
import * as actions from '../action';
import { LayoutState } from '../../../models';

export const mainAppKey = 'root'
export const initialState: LayoutState = {
  brand: 'assets/brand.png',
  menus: [
      {
        id: 'home',
        label: 'Home',
        path: 'home',
      },
      {
        id: 'products',
        label: 'Products',
        path: 'product',
      },
      {
        id: 'about',
        label: 'About',
        path: 'about',
      },
      {
        id: 'contact',
        label: 'Contact',
        path: 'contact',
      },    
  ],
  profile:  {
    id: 1,
    img: 'assets/profile.png',
    lastName: 'Jonard',
    firstName: 'Rosas'
  },
  footer: {
    copyrightLink: '© Copyright 2024',
    copyrightText: 'Jonard Rosas',
    items: [
      {id: 'home', label: 'Home', path: 'home'},
      {id: 'features', label: 'Features', path: 'feature'},
      {id: 'about', label: 'About', path: 'about'},
      {id: 'contact', label: 'Contact', path: 'contact'},
      {id: 'admin', label: 'Admin', path: 'admin'},
    ]
  },
  isLoaded: false,
  isLoading: false,
};


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

export const mainFeature = createFeature({name: mainAppKey, reducer: mainAppReducer})