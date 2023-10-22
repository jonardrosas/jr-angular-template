import { environment } from './../../environments/environment';

export const APPCONFIG = {
  brand: 'assets/img/brand3.png',
  aiUnderContruction: 'assets/img/ai_under_construction.webp',

  navigation: [
    { label: 'Home', icon: '', url: 'home' },
    { label: 'Technologies', icon: '', url: 'technologies' },
    { label: 'Contact', icon: '', url: 'contact' },
    { label: 'About', icon: '', url: 'about' },
  ],
  sidenavMode: 'over',
  apiUrl: environment.apiUrl

};
