export interface AppState {
  root: LayoutState;
}

export interface LayoutState {
    menus: MenuItemInterface[];
    footer: FooterInterface;
    isLoading: boolean;
    isLoaded: boolean;
}

export interface MenuItemInterface {
    id: string;
    label: string;
    path: string;
}


export interface FooterInterface {
    copyrightLink: string;
    copyrightText: string;
    items: FooterItems[];
}

export interface FooterItems {
    id: string;
    label: string;
    path: string;
}


export const DARK = 'dark';
export type MODE = 'dark' | ''