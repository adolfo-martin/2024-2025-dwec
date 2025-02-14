import { Component } from '@angular/core';
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

  constructor(private service: ThermomixService) {
    this.books$ = this.service.retrieveBooks$();
  }
}
