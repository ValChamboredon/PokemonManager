import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  // Récupérer la liste des générations
  getGenerations(): Observable<any[]> {
    return this.http.get<any>('https://pokeapi.co/api/v2/generation/').pipe(
      map(response => response.results) 
    );
  }

  getPokemons(): Observable<any[]> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=20').pipe(
      map(response => response.results.map((pokemon: any, index: number) => {
        const id = index + 1;
        return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
          map(pokemonData => ({
            id,
            nom: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            image: pokemonData.sprites.front_default,
            categorie: pokemonData.species?.name,
            type: pokemonData.types?.map((t: any) => t.type.name).join(' / ') ,
            taille: pokemonData.height / 10 ,
            poids: pokemonData.weight / 10
          }))
        );
      }))
    );
  }
  
  
  
}



