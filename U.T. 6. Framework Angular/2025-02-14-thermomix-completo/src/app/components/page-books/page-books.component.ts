import { Component } from '@angular/core';
import { TableBooksComponent } from "../table-books/table-books.component";
import { Router } from '@angular/router';

@Component({
  selector: 'page-books',
  imports: [TableBooksComponent],
  templateUrl: './page-books.component.html',
  styleUrl: './page-books.component.css'
})
export class PageBooksComponent {
  bookSelected: string | undefined;

  constructor(private router: Router) {}

  gotoAndShowDishes(event: MouseEvent) {
    if (this.bookSelected) {
      this.router.navigate(['books', this.bookSelected, 'dishes']);
    } else {
      alert('Seleccione un libro');
    }
  }

}
