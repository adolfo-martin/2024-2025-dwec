import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'panel-categories',
  imports: [ CommonModule ],
  templateUrl: './panel-categories.component.html',
  styleUrl: './panel-categories.component.css'
})
export class PanelCategoriesComponent {
  categories$: Observable<any>;

  constructor(
    private service: ProductsService,
    private router: Router,
  ) {
    this.categories$ = this.service.getCategories$();
  }

  showProducts(event: Event) {
    // @ts-ignore
    const categoryId = event.target.value;
    this.router.navigate(['/products/']);
  }
}
