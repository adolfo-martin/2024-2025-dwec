import { Component } from '@angular/core';
import { DatalistDishesComponent } from "../datalist-dishes/datalist-dishes.component";

@Component({
  selector: 'page-recipes',
  imports: [DatalistDishesComponent],
  templateUrl: './page-recipes.component.html',
  styleUrl: './page-recipes.component.css'
})
export class PageRecipesComponent {

}
