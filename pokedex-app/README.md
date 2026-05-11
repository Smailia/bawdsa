# PokéDex Angular App

Applicazione Angular che consuma la [PokéAPI](https://pokeapi.co/) per mostrare:

1. **Lista Tipi** — 12 categorie di pokemon (normal, ground, rock, fire, …)
2. **Lista Pokémon per tipo** — selezionando un tipo si carica la lista via HTTP
3. **Dettaglio Pokémon** — nome, sprite ufficiale, tipi, statistiche base, abilità e mosse

## Struttura del progetto

```
src/app/
├── models/
│   └── pokemon.model.ts          ← Interfacce TypeScript per i JSON dell'API
├── services/
│   └── pokemon.service.ts        ← HttpClient wrapper per PokéAPI
├── pages/
│   ├── type-list/                ← Pagina 1: griglia dei tipi
│   ├── pokemon-list/             ← Pagina 2: lista pokemon per tipo
│   └── pokemon-detail/           ← Pagina 3: dettaglio singolo pokemon
├── app-routing.module.ts         ← Routing: /, /type/:typeName, /pokemon/:name
└── app.module.ts                 ← Modulo root con HttpClientModule
```

## Avvio rapido

```bash
# 1. Installare le dipendenze
npm install

# 2. Avviare il dev server
ng serve

# 3. Aprire nel browser
# http://localhost:4200
```

## Funzionalità Angular utilizzate

| Funzionalità         | Dove                         |
|----------------------|------------------------------|
| `HttpClient`         | `PokemonService`             |
| `RouterModule`       | `AppRoutingModule`           |
| `ActivatedRoute`     | `PokemonListComponent`, `PokemonDetailComponent` |
| `routerLink`         | Tutti i template             |
| `paramMap`           | Lettura parametri dalla route |
| Modelli di dati      | `pokemon.model.ts`           |
| `*ngFor` / `*ngIf`   | Tutti i template             |
| `| titlecase`        | Formattazione nomi           |

## API endpoints usati

- `GET https://pokeapi.co/api/v2/type/{typeName}/` → lista pokemon per tipo
- `GET https://pokeapi.co/api/v2/pokemon/{name}/` → dettaglio pokemon
