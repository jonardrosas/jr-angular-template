import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MatCardModule, MatCardSubtitle } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { animation: 'HomePage' },
    title: 'Home Page'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatCardModule],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
