export interface MetaState {
    type: string;
    detail_url: string;
    html_url: string;
    slug: string;
    show_in_menus: boolean,
    seo_title: string;
    search_description: string
    first_published_at: string;
    alias_of?: string;
    parent?: string;
  }


  export interface PageQuery {
    meta: {
        total_count: number
    },
    items: any[];
  }


  export interface DrfResponseState {
    count: number;
    next?: string;
    previous?: string;
    results: any[];
  }


  export interface FooterState {
  logo: string;
  text: string;
  copyrightLink: string;
  copyrightText: string;
}

export interface NavItemState {
  link: string;
  label: string;
  icon?: string;
}

export interface FooterLinkItem {
  title: string;
  items: NavItemState[];
}

export interface LayoutState {
  brand: string;
  footer: FooterState;
  naviItems: NavItemState[];
  isLoading: boolean;
  isLoaded: boolean;
}


export interface ResponseLayoutState {
  brand: string;
  copyright_link: string;
  copyright_text: string;
  items: FooterLinkItem[];
  footer_img: string;
}
