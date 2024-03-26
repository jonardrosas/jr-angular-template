
export interface HomeState  {
    heroSection: HeroSection;
}


export interface HeroSection {
  image: {
    src: string;
    alt: string;
  };
  headline: string;
  text: string;
  subheadline: string;
  ctaButton: {
    text: string;
    link: string;
  };
}