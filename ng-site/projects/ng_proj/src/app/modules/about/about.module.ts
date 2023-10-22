import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule  } from '@ngrx/effects';

import { LayoutsModule } from '../../shared/layouts.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AboutEffects } from './store/effects';
import * as store from './store';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AboutPageComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    LayoutsModule,
    StoreModule.forFeature(store.featureKey, store.reducer),
    EffectsModule.forFeature(AboutEffects)
  ],
  providers: [DataService]
})
export class AboutModule { }
