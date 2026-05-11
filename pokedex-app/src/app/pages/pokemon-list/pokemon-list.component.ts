import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonEntry, TypeResponse } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  typeName: string = '';
  pokemons: PokemonEntry[] = [];
  isLoading = true;
  hasError = false;

  // Mostriamo solo i primi N pokemon per non sovraccaricare la UI
  readonly PAGE_SIZE = 40;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    // Leggiamo il parametro :typeName dalla route
    this.route.paramMap.subscribe(params => {
      const name = params.get('typeName');
      if (name) {
        this.typeName = name;
        this.loadPokemons(name);
      }
    });
  }

  private loadPokemons(typeName: string): void {
    this.isLoading = true;
    this.hasError = false;

    this.pokemonService.getPokemonByType(typeName).subscribe({
      next: (response: TypeResponse) => {
        // L'API restituisce tutti i pokemon del tipo; prendiamo i primi PAGE_SIZE
        this.pokemons = response.pokemon.slice(0, this.PAGE_SIZE);
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  /** Estrae il nome leggibile dal campo pokemon.name */
  capitalize(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  /** Estrae l'ID del pokemon dall'URL per mostrare lo sprite */
  getPokemonId(url: string): number {
    const parts = url.split('/').filter(Boolean);
    return parseInt(parts[parts.length - 1], 10);
  }

  getSpriteUrl(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
}
