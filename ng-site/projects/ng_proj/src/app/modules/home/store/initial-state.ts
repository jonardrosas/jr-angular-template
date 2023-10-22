import { HomeState } from '../models/home.interface';

export const initialState: HomeState = {
  isLoaded: false,
  isLoading: false,
  meta: {
    type: '',
    detail_url: '',
    html_url: '',
    slug: '',
    show_in_menus: false,
    seo_title: '',
    search_description: '',
    first_published_at: '',
    alias_of: '',
    parent: '',
  },
  hero: {
    header: '',
    title: '',
    hero_title: '',
    subtitle: '',
    text: '',
    //text: 'A Full Stack Web Developer. Help me shape your future.',
    cta: "Let's go",
    cta2: '',
    ideasString: "Let's turn your ideas into reality",
  },
};
