import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MatLayoutComponent } from './layouts/mat-layout/mat-layout.component';

const pageNotFound = {
  path: '**',
  component: MatLayoutComponent,
  children: [
      {
        path: '',
        component: PageNotFoundComponent
      }
  ]
};

const routes: Routes = [
  {
    path: '',
    component: MatLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import(`../modules/home/home.module`).then((mod) => mod.HomeModule),
        data: { animation: 'HomePage' },
      },
      {
        path: 'contact',
        loadChildren: () => import(`../modules/contact/contact.module`).then((mod) => mod.ContactModule),
        data: { animation: 'ContactPage' },
      },
      {
        path: 'about',
        loadChildren: () => import(`../modules/about/about.module`).then((mod) => mod.AboutModule),
        data: { animation: 'AboutPage' },
      },
      {
        path: 'projects',
        loadChildren: () => import(`../modules/projects/projects.module`).then((mod) => mod.ProjectsModule),
        data: { animation: 'ProjectsPage' },
      },
    ],
  },
  pageNotFound,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
