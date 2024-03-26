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
