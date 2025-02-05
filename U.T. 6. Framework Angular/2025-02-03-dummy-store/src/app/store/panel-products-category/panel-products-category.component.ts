import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'panel-products-category',
  imports: [ CommonModule ],
  templateUrl: './panel-products-category.component.html',
  styleUrl: './panel-products-category.component.css'
})
export class PanelProductsCategoryComponent {
  categoryCode: string;
  products$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private service: StoreService,
  ) {
    // @ts-ignore
    this.categoryCode = this.route.snapshot.paramMap.get('categoryCode');
    this.products$ = this.service.retrieveProductsByCategoryCode$(this.categoryCode);
  }


}
