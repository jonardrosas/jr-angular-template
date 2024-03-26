import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PageNotFoundComponent } from './pages';
import { HomePageComponent } from './features/home/pages/home-page.component'; 
import { AboutComponent } from './features/about/about.component'; 
import { ContactComponent } from './features/contact/contact.component';
import { ProductComponent  } from './features/product/product.component';
import { homeFeature } from './features/home/store/state'

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'home',
                component: HomePageComponent,
                providers: [
                    provideState(homeFeature)
                ]
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
