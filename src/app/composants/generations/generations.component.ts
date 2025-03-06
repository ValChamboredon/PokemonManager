import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-generations',
  standalone:true,
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent {
  generations: any[] = [];

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getGenerations().subscribe(data => {
      this.generations = data;
    });
  }
}



