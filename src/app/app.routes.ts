import { Routes } from '@angular/router';
import { GenerationsComponent } from './composants/generations/generations.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';

export const routes: Routes = [
    {path: '',component:GenerationsComponent},
    {path: 'pokemon',component:PokemonsComponent}
];
