import { Component} from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  standalone:true,
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {
  pokemons: any[] = [];  
  pokemonCount: number = 0; 

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(observables => {
      forkJoin(observables).subscribe(data => {
        console.log('Pokémon avec toutes les infos :', data);
        this.pokemons = data;
        this.pokemonCount = data.length;
      });
    });
  }
  
  
  

}



