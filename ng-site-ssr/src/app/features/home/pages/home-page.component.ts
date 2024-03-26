import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeroSectionComponent } from '../components/hero-section/hero-section.component';
import * as actions from './../store/action';
import { homeFeature } from './../store/state'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  public header = 'Welcome To Jonard Site'
  store = inject(Store)
  heroSection$ = this.store.select(homeFeature.selectHeroSection)

  ngOnInit() {
    this.store.dispatch(actions.getHero())
  }

}
