import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeListComponent } from './pages/type-list/type-list.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  // Pagina principale: lista dei tipi
  { path: '', component: TypeListComponent },

  // Lista pokemon per tipo (es: /type/ground)
  { path: 'type/:typeName', component: PokemonListComponent },

  // Dettaglio pokemon (es: /pokemon/pikachu)
  { path: 'pokemon/:name', component: PokemonDetailComponent },

  // Fallback redirect
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
