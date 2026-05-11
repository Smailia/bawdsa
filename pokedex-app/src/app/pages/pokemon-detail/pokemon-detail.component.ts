import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetail } from '../../models/pokemon.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonDetail | null = null;
  isLoading = true;
  hasError = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');
      if (name) {
        this.loadDetail(name);
      }
    });
  }

  private loadDetail(name: string): void {
    this.isLoading = true;
    this.hasError = false;

    this.pokemonService.getPokemonDetail(name).subscribe({
      next: (data: PokemonDetail) => {
        this.pokemon = data;
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  /** Restituisce il colore associato a un tipo */
  typeColor(typeName: string): string {
    const colors: Record<string, string> = {
      normal:   '#A8A878', fire:     '#F08030', water:    '#6890F0',
      electric: '#F8D030', grass:    '#78C850', ice:      '#98D8D8',
      fighting: '#C03028', poison:   '#A040A0', ground:   '#E0C068',
      flying:   '#A890F0', psychic:  '#F85888', bug:      '#A8B820',
      rock:     '#B8A038', ghost:    '#705898', dragon:   '#7038F8',
      dark:     '#705848', steel:    '#B8B8D0', fairy:    '#EE99AC',
    };
    return colors[typeName] ?? '#888';
  }

  capitalize(s: string): string {
    return s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  /** Percentuale per la barra della stat (max teorico 255) */
  statPercent(value: number): number {
    return Math.min(100, Math.round((value / 255) * 100));
  }

  statColor(value: number): string {
    if (value >= 100) return '#22c55e';
    if (value >= 60)  return '#f7c948';
    return '#f87171';
  }

  getOfficialArtwork(): string {
    return this.pokemon?.sprites?.other?.['official-artwork']?.front_default
      ?? this.pokemon?.sprites?.front_default
      ?? '';
  }
}
