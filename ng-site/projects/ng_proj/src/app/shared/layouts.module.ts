import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from '../core/core.module';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { PlatformService, SpaceService, MetaService } from './services';
import { NavBrandComponent } from './components/nav-brand/nav-brand.component';
import { MatLayoutComponent } from './layouts/mat-layout/mat-layout.component';
import { MatToolbarComponent, NavItemsComponent, FooterComponent } from './components';

import { OnscrollDirective } from './directives/onscroll.directive';
import { OnviewDirective } from './directives/onview.directive';
import { BaseEffectsEffects } from './store/effects';
import { reducer } from './store/reducers';

@NgModule({
  declarations: [
    NavBrandComponent,
    MatLayoutComponent,
    OnscrollDirective,
    OnviewDirective,
    MatToolbarComponent,
    NavItemsComponent,
    FooterComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    LayoutsRoutingModule,
    MatSidenavModule,
    ScrollingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    LayoutModule,
    StoreModule.forFeature('layout', reducer),
    EffectsModule.forFeature(BaseEffectsEffects),
  ],
  providers: [PlatformService, SpaceService, MetaService],
  exports: [
    OnviewDirective,
  ],
})
export class LayoutsModule {}
