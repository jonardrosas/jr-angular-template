import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectIndexComponent } from './pages/project-index/project-index.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectIndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
