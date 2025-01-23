import { Component } from '@angular/core';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';

@Component({
  selector: 'app-root',
  imports: [CardPokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 
  positiveVotesCounter: number = 0;
  negativeVotesCounter: number = 0;

  processPositiveVote($event: void) {
    this.positiveVotesCounter++;
  }

  processNegativeVote($event: void) {
    this.negativeVotesCounter++;
  }

  processPokemonLoaded($event: void) {
    this.positiveVotesCounter = 9999;
  }
}
