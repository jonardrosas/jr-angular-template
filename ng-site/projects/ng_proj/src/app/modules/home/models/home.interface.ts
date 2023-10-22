import { MetaState } from '../../../shared/models/meta';

export interface HomeState {
  isLoaded: boolean;
  isLoading: boolean;
  hero: HeroState;
  meta: any;
}

export interface HeroState {
  header?: string;
  title: string;
  subtitle: string;
  image: string;
  text: string;
  cta: string;
  cta2: string;
}
