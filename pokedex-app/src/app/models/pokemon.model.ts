// Modello per un tipo di pokemon (es. ground, normal, rock)
export interface PokemonType {
  name: string;
  url: string;
}

// Modello per l'entry di un pokemon nella lista tipo
export interface PokemonEntry {
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
}

// Risposta API per un tipo
export interface TypeResponse {
  id: number;
  name: string;
  pokemon: PokemonEntry[];
  damage_relations: DamageRelations;
}

export interface DamageRelations {
  double_damage_from: PokemonType[];
  double_damage_to: PokemonType[];
  half_damage_from: PokemonType[];
  half_damage_to: PokemonType[];
  no_damage_from: PokemonType[];
  no_damage_to: PokemonType[];
}

// Modello per i dettagli di un pokemon
export interface PokemonDetail {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    front_shiny: string;
    other: {
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      };
    };
  };
  types: {
    slot: number;
    type: PokemonType;
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  abilities: {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }[];
  moves: {
    move: { name: string; url: string };
  }[];
}

// Categoria locale definita nell'app
export interface TypeCategory {
  name: string;
  label: string;
  color: string;
  emoji: string;
}
