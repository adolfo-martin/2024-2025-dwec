import { Component } from '@angular/core';
import { TableDishesComponent } from "../table-dishes/table-dishes.component";

@Component({
  selector: 'page-dishes',
  imports: [TableDishesComponent],
  templateUrl: './page-dishes.component.html',
  styleUrl: './page-dishes.component.css'
})
export class PageDishesComponent {

}
