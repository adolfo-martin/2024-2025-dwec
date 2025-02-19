import { Routes } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageBooksComponent } from './components/page-books/page-books.component';
import { PageDishesComponent } from './components/page-dishes/page-dishes.component';
import { PageRecipesComponent } from './components/page-recipes/page-recipes.component';
import { PageError404Component } from './components/page-error-404/page-error-404.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: PageHomeComponent },
    { path: 'books', component: PageBooksComponent },
    { path: 'books/:bookId/dishes', component: PageDishesComponent },
    { path: 'dishes', component: PageDishesComponent },
    { path: 'recipes', component: PageRecipesComponent },
    { path: '**', component: PageError404Component },
];
