import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeResponse, PokemonDetail } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly BASE_URL = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  /**
   * Ottiene la lista dei pokemon per un tipo specifico
   * es: https://pokeapi.co/api/v2/type/ground/
   */
  getPokemonByType(typeName: string): Observable<TypeResponse> {
    return this.http.get<TypeResponse>(`${this.BASE_URL}/type/${typeName}/`);
  }

  /**
   * Ottiene i dettagli di un singolo pokemon per nome o id
   * es: https://pokeapi.co/api/v2/pokemon/pikachu/
   */
  getPokemonDetail(nameOrId: string | number): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${this.BASE_URL}/pokemon/${nameOrId}/`);
  }
}
