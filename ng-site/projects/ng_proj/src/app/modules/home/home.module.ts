import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutsModule } from '../../shared/layouts.module';
import { reducer } from './store/reducers';
import { HomeService } from './services';

import { HomeEffects } from './store/effects';
import { HeroComponent } from './components';

@NgModule({
  declarations: [
    HomePageComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutsModule,
    StoreModule.forFeature('home', reducer),
    EffectsModule.forFeature(HomeEffects),
    MatCardModule,
    MatButtonModule,
  ],
  providers: [HomeService],
})
export class HomeModule {

  constructor(){
  }

}
