import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableDishesComponent } from "../table-dishes/table-dishes.component";

@Component({
  selector: 'tab-dishes',
  imports: [TableDishesComponent],
  templateUrl: './tab-dishes.component.html',
  styleUrl: './tab-dishes.component.css'
})
export class TabDishesComponent {
  route = inject(ActivatedRoute);

  constructor() {
    const bookId = this.route.snapshot.paramMap.get('bookId');
  }
}
