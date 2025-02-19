import { Component } from '@angular/core';
import { ThermomixService } from '../../services/thermomix.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'table-books',
  imports: [ CommonModule ],
  templateUrl: './table-books.component.html',
  styleUrl: './table-books.component.css'
})
export class TableBooksComponent {
  books$;

  constructor(
    private service: ThermomixService,
    private router: Router,
  ) {
    this.books$ = this.service.retrieveBooks$();
  }

  // gotoAndShowDishes(bookId: string) {
  //   console.log('gotoAndShowDishes: ', bookId);
  // }

  gotoAndShowDishes(event: MouseEvent) {
    // console.log('gotoAndShowDishes: ', event.target.dataset.book);
    // @ts-ignore
    const bookId = event.target.dataset.book;
    this.router.navigate(['books', bookId, 'dishes']);
  }
}
