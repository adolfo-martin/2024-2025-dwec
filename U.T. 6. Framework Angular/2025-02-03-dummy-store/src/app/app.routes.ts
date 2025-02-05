import { Routes } from '@angular/router';
import { PanelCategoriesComponent } from './store/panel-categories/panel-categories.component';
import { PanelProductsCategoryComponent } from './store/panel-products-category/panel-products-category.component';

export const routes: Routes = [
    { path: 'categories', component: PanelCategoriesComponent },
    { path: 'categories/:categoryCode/products', component: PanelProductsCategoryComponent },
];
