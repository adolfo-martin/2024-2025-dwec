import { Component, EventEmitter, Output } from '@angular/core';
import { ThermomixService } from '../../services/thermomix.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'table-books',
  imports: [ CommonModule ],
  templateUrl: './table-books.component.html',
  styleUrl: './table-books.component.css'
})
export class TableBooksComponent {
  books$;
  @Output('bookchanged') 
  private bookChangedEmitter = new EventEmitter<string>();

  constructor(
    private service: ThermomixService,
  ) {
    this.books$ = this.service.retrieveBooks$();
  }

  // gotoAndShowDishes(bookId: string) {
  //   console.log('gotoAndShowDishes: ', bookId);
  // }

  reportBookSelected(bookId: string) {
    // const bookId = event.target.dataset.book;
    this.bookChangedEmitter.emit(bookId);
  }
}
