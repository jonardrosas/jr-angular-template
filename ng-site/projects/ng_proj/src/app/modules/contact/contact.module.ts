import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'; 

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LayoutsModule } from '../../shared/layouts.module';
import * as store from './store';
import { ContactEffect } from './store/effects'
import { DataService } from './services';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    LayoutsModule,
    StoreModule.forFeature(store.featureKey, store.reducer),
    EffectsModule.forFeature(ContactEffect)
  ],
  providers: [ DataService ]
})
export class ContactModule {

  constructor(){
  }
}
