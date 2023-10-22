export interface HeroModel {
  title: string;
  text: string;
  images?: string;
  cta: string;
  [data: string]: any;
}

export interface HeroWrapper {
  isLoading: boolean;
  isLoaded: boolean;
  hero: HeroModel;
}
