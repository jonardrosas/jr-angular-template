import { createFeature, createReducer, on } from "@ngrx/store";
import * as actions from './action'
import { HomeState } from "../models";


export const homeFeatureKey = 'home'
export const initialState: HomeState = {
  heroSection: {
    image: {
      // src: '/assets/cover.png',
      src: '/assets/cover2.jpg',
      alt: 'Hero Image',
    },
    headline: 'Welcome to my Angular Template',
    subheadline: 'Build on top of Angular 17.3.0 and using Tailwind CSS',
    text: 'Author: Jonard Rosas',
    ctaButton: {
      text: 'Learn More',
      link: '/product',
    },
  },
};


export const homeReducer = createReducer(
    initialState,
    on(actions.getHero, (state): HomeState => ({
        ...state
    })),
    on(actions.setHero, (state): HomeState => ({
        ...state
    }))

)

export const homeFeature = createFeature({name: homeFeatureKey, reducer: homeReducer})