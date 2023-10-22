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
import { LayoutsModule } from '../../shared/layouts.module';
import { ProjectService } from './services/project.service';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from './store/effects';

@NgModule({
  declarations: [
    ProjectIndexComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature(ProjectEffects),
    LayoutsModule,
  ],
  providers: [ProjectService],
})
export class ProjectsModule {}
