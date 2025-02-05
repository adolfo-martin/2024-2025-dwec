import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from '../store.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'panel-categories',
  imports: [CommonModule],
  templateUrl: './panel-categories.component.html',
  styleUrl: './panel-categories.component.css',
})
export class PanelCategoriesComponent {
  categories$: Observable<any>;

  constructor(
    private service: StoreService,
    private router: Router,
  ) {
    this.categories$ = this.service.retrieveCategories$();
  }

  gotoPanelProductsOfCategorySelected(event: Event) {
    // @ts-ignore
    const categoryCode = event.target.value;
    this.router.navigate(['categories', categoryCode, 'products'])
  }
}
