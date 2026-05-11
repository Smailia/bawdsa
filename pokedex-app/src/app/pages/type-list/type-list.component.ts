import { Component, OnInit } from '@angular/core';
import { TypeCategory } from '../../models/pokemon.model';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent implements OnInit {

  // Categorie definite localmente — puoi aggiungerne altre
  types: TypeCategory[] = [
    { name: 'normal',   label: 'Normal',   color: '#A8A878', emoji: '⭐' },
    { name: 'ground',   label: 'Ground',   color: '#E0C068', emoji: '🌍' },
    { name: 'rock',     label: 'Rock',     color: '#B8A038', emoji: '🪨' },
    { name: 'fire',     label: 'Fire',     color: '#F08030', emoji: '🔥' },
    { name: 'water',    label: 'Water',    color: '#6890F0', emoji: '💧' },
    { name: 'grass',    label: 'Grass',    color: '#78C850', emoji: '🌿' },
    { name: 'electric', label: 'Electric', color: '#F8D030', emoji: '⚡' },
    { name: 'psychic',  label: 'Psychic',  color: '#F85888', emoji: '🔮' },
    { name: 'ghost',    label: 'Ghost',    color: '#705898', emoji: '👻' },
    { name: 'dragon',   label: 'Dragon',   color: '#7038F8', emoji: '🐉' },
    { name: 'dark',     label: 'Dark',     color: '#705848', emoji: '🌑' },
    { name: 'steel',    label: 'Steel',    color: '#B8B8D0', emoji: '⚙️' },
  ];

  ngOnInit(): void {}
}
