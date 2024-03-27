import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  let component: HeroSectionComponent;
  let fixture: ComponentFixture<HeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent, RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSectionComponent);
    component = fixture.componentInstance;
    component.heroSection = {
      image: {
        src: '/assets/cover2.jpg',
        alt: 'Hero Image',
      },
      headline: 'Welcome to my Angular Template',
      subheadline: 'Build on top of Angular 17.3.0 and using Tailwind CSS',
      text: 'Author: Jonard Rosas',
      ctaButton: {
        text: 'Learn More',
        link: '/product',
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
