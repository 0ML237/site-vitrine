import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    {
      path: '', pathMatch: 'full', component: HomeComponent
    },
    {
      path: 'about', component: AboutComponent
    },
    {
      path: 'services', component: ServicesComponent
    },
    {
      path: 'contact', component: ContactComponent
    },
    {
      path: 'products', component: ProductsComponent
    },
    {
      path: '**', redirectTo: ''
    }];
