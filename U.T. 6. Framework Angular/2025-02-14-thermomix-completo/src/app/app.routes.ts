import { Routes } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageBooksComponent } from './components/page-books/page-books.component';
import { PageDishesComponent } from './components/page-dishes/page-dishes.component';
import { PageRecipesComponent } from './components/page-recipes/page-recipes.component';

export const routes: Routes = [
    { path: 'home', component: PageHomeComponent },
    { path: 'books', component: PageBooksComponent },
    { path: 'dishes', component: PageDishesComponent },
    { path: 'recipes', component: PageRecipesComponent },
];
