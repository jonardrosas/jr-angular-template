import { APPCONFIG } from '../../config';
import { LayoutState } from './../models/meta'


export const initialState: LayoutState = {
    isLoading: false,
    isLoaded: false,
    brand: APPCONFIG.brand,
    naviItems: [
      { link: '/home', label: 'Home' },
      { link: '/technologies', label: 'Technologies' },
      { link: '/projects', label: 'Projects' },
      { link: '/contact', label: 'Contact' },
      { link: '/about', label: 'About' },
    ],
    footer: {
      logo: APPCONFIG.brand,
      text: '',
      copyrightLink: 'JRDev.com',
      copyrightText: '© 2023 Copyright',
    },
  
  };
  