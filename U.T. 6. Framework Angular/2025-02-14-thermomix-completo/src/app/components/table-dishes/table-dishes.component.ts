import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ThermomixService } from '../../services/thermomix.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'table-dishes',
  imports: [ CommonModule ],
  templateUrl: './table-dishes.component.html',
  styleUrl: './table-dishes.component.css'
})
export class TableDishesComponent implements OnInit {
  dishes$: Observable<any> | undefined;

  @Input('book') 
  bookId: string | undefined | null;
  
  constructor(private service: ThermomixService) { }
  
  ngOnInit(): void {
    // console.log('BOOKID: ', this.bookId);
    if (this.bookId) {
      this.dishes$ = this.service.retrieveDishesByBook$(this.bookId);
    } else {
      this.dishes$ = this.service.retrieveDishes$();
    }
  }
}
