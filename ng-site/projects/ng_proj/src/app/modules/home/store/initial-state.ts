import { APPCONFIG } from '../../configs';
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
    image: APPCONFIG.heroImage,
    header: 'Hi,',
    title: 'I\m Jonard',
    subtitle: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum sit amet sapien at imperdiet. Mauris ac est ut massa vulputate mattis et vel risus. Donec ac maximus ex. Praesent sit amet justo vehicula, posuere justo eget, aliquet nunc. ',
    cta: "Discover",
    cta2: 'Hire Me!',
  },
};
