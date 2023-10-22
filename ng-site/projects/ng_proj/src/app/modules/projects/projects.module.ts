import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';


import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectIndexComponent } from './pages/project-index/project-index.component';
import { reducer, featureKey } from './store/reducers';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ProjectCategoriesComponent } from './components/project-categories/project-categories.component';
import { SideToggleComponent } from './components/side-toggle/side-toggle.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { ProjectListingsComponent } from './components/project-listings/project-listings.component';
import { ProjectMenubarComponent } from './components/project-menubar/project-menubar.component';
import { LayoutsModule } from '../../shared/layouts.module';
import { ProjectMobileDropdownComponent } from './components/project-mobile-dropdown/project-mobile-dropdown.component';
import { ProjectLayoutComponent } from './layouts/project-layout/project-layout.component';
import { ProjectCategoryComponent } from './pages/project-category/project-category.component';
import { ProjectListingItemComponent } from './components/project-listing-item/project-listing-item.component';
import { ProjectService } from './services/project.service';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from './store/effects';
import { ProjectDetailLayoutComponent } from './layouts/project-detail-layout/project-detail-layout.component';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';
import { ProjectDetailGalleryComponent } from './components/project-detail-gallery/project-detail-gallery.component';
import { ProjectDetailTabComponent } from './components/project-detail-tab/project-detail-tab.component';
import { ProjectDetailInfoComponent } from './components/project-detail-info/project-detail-info.component';
import { ProjectBreadcrumbsComponent } from './components/project-breadcrumbs/project-breadcrumbs.component';

@NgModule({
  declarations: [
    ProjectIndexComponent,
    ProjectDetailComponent,
    ProjectCategoriesComponent,
    SideToggleComponent,
    ProjectInfoComponent,
    ProjectListingsComponent,
    ProjectMenubarComponent,
    ProjectMobileDropdownComponent,
    ProjectLayoutComponent,
    ProjectCategoryComponent,
    ProjectListingItemComponent,
    ProjectDetailLayoutComponent,
    ProjectDetailGalleryComponent,
    ProjectDetailTabComponent,
    ProjectDetailInfoComponent,
    ProjectBreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature(ProjectEffects),
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    LayoutsModule,
    GalleryModule
  ],
  providers: [ProjectService],
})
export class ProjectsModule {}
