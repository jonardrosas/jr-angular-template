import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component'
import { HomePageComponent } from './pages/home/home-page/home-page.component'

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomePageComponent
            }
        ]
    }

];
