import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenerationsComponent } from './composants/generations/generations.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,GenerationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PokemonManager';
}
