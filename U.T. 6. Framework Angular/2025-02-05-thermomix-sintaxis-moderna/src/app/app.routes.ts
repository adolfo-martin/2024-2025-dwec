import { Routes } from '@angular/router';
import { TabBooksComponent } from './components/tab-books/tab-books.component';
import { TabDishesComponent } from './components/tab-dishes/tab-dishes.component';

export const routes: Routes = [
    { path: 'books', component: TabBooksComponent },
    { path: 'books/:bookId/dishes', component: TabDishesComponent},
];
