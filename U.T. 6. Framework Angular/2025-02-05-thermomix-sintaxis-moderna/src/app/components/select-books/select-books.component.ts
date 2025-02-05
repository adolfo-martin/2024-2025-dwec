import { Component, inject, input, output } from '@angular/core';
import { ThermomixService } from '../../services/thermomix.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'select-books',
  imports: [CommonModule],
  templateUrl: './select-books.component.html',
  styleUrl: './select-books.component.css',
})
export class SelectBooksComponent {
  private service = inject(ThermomixService);
  books$ = this.service.getBooks$();
  labelSignal = input.required<string>({ alias: 'label' });
  book$: Observable<any> | undefined;
  bookChanged = output<string>();
  private router = inject(Router);

  handlerBookChanged(event: Event) {
    // @ts-ignore
    const bookCode = event.target.value;
    this.book$ = this.service.getBookByCode$(bookCode);
    this.bookChanged.emit(bookCode);
  }

  handlerShowDishes($event: MouseEvent) {
    this.router.navigate(['books', '1111', 'dishes']);
  }
}
