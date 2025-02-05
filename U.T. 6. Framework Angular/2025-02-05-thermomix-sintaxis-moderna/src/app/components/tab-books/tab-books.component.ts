import { Component } from '@angular/core';
import { SelectBooksComponent } from "../select-books/select-books.component";

@Component({
  selector: 'tab-books',
  imports: [SelectBooksComponent],
  templateUrl: './tab-books.component.html',
  styleUrl: './tab-books.component.css'
})
export class TabBooksComponent {
  handlerBookChanged(event: string) {
    console.log(event);
  }
}
