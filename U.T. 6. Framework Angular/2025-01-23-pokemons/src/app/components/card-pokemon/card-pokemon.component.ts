import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-pokemon',
  imports: [CommonModule],
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.css',
})
export class CardPokemonComponent implements OnInit {
  @Input('pokemon') public pokemonId: string = '';

  @Output('positiveVoted') public positiveVotedEmitter = new EventEmitter<void>();
  @Output('negativeVoted') public negativeVotedEmitter = new EventEmitter<void>();
  @Output('pokemonLoaded') public pokemonLoadedEmitter = new EventEmitter<void>();

  pokemon$: Observable<Pokemon> | undefined;

  constructor(private pokemonsService: PokemonsService) {
  }
  
  ngOnInit(): void {
    this.pokemon$ = this.pokemonsService.getPokemonById$(
      parseInt(this.pokemonId)
    );
    
    this.pokemon$?.subscribe(pokemon => this.pokemonLoadedEmitter.emit());
  }

  reportNegativeVote($event: MouseEvent) {
    this.negativeVotedEmitter.emit();
  }

  reportPositiveVote($event: MouseEvent) {
    this.positiveVotedEmitter.emit();
  }
}
