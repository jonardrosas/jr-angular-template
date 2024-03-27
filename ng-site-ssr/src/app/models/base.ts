export interface AppState {
  root: LayoutState;
}

export interface LayoutState {
    brand: string | null;
    profile: ProfileState;
    menus: MenuItemInterface[];
    footer: FooterInterface;
    isLoading: boolean;
    isLoaded: boolean;
}

export interface ProfileState {
    img: string;
    id: number;
    firstName: string;
    lastName: string;
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