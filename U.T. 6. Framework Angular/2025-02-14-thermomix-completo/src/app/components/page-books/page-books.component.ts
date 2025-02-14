import { Component } from '@angular/core';
import { TableBooksComponent } from "../table-books/table-books.component";

@Component({
  selector: 'page-books',
  imports: [TableBooksComponent],
  templateUrl: './page-books.component.html',
  styleUrl: './page-books.component.css'
})
export class PageBooksComponent {

}
