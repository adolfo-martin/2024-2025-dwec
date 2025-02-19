import { Component } from '@angular/core';
import { TableDishesComponent } from "../table-dishes/table-dishes.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-dishes',
  imports: [TableDishesComponent],
  templateUrl: './page-dishes.component.html',
  styleUrl: './page-dishes.component.css'
})
export class PageDishesComponent {
  bookId: string | undefined | null;

  constructor(private route: ActivatedRoute) {
    this.bookId = this.route.snapshot.paramMap.get('bookId');
    // console.log('Parámetro URL: ', bookId);
  }


}
