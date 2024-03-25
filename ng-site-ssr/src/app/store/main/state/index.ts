import { LayoutState } from '../../../models/base';

export const initialState: LayoutState = {
  menus: [
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
  footer: {
    copyrightLink: '2024',
    copyrightText: 'Jonard Rosas',
  },
  isLoaded: false,
  isLoading: false,
};
