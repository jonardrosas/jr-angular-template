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
  hero_title: string;
  subtitle: string;
  text: string;
  cta: string;
  cta2: string;
  ideasString?: string;
}
