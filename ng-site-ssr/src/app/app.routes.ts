import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component'
import {
    HomePageComponent, PageNotFoundComponent,
    AboutComponent, ContactComponent, ProductComponent
} from './pages';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomePageComponent
            },
            {
                path: 'product',
                component: ProductComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ]
    }

];
