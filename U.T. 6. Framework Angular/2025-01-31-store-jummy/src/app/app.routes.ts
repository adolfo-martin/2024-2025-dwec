import { Routes } from '@angular/router';
import { PanelCategoriesComponent } from './components/panel-categories/panel-categories.component';
import { PanelProductsComponent } from './components/panel-products/panel-products.component';

export const routes: Routes = [
    { path: 'categories', component: PanelCategoriesComponent },
    { path: 'categories/:categoryId/products', component: PanelCategoriesComponent },
    { path: 'products', component: PanelProductsComponent },
];
