import { Component, inject, Input, OnInit } from '@angular/core';
import { ThermomixService } from '../../services/thermomix.service';
import { Observable } from 'rxjs';
import { Dish } from '../../models/dish.model';

@Component({
  selector: 'table-dishes',
  imports: [],
  templateUrl: './table-dishes.component.html',
  styleUrl: './table-dishes.component.css'
})
export class TableDishesComponent {
  // bookId = input<number>(0, { alias: 'book'});

  // @ts-ignore
  private _bookId: number;
  get bookId(): number {
    return this._bookId;
  }
  @Input('book') set bookId(value: string) {
    this._bookId = parseInt(value);
  }

  service = inject(ThermomixService);
  dishes$: Observable<Dish[]> | undefined;

  constructor() {
    this.dishes$ = this.service.getDishesByBookId$(this._bookId);
  }
}
