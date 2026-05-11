import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-shell">
      <header class="app-header">
        <a routerLink="/" class="logo">
          <span class="logo-icon">⬡</span>
          <span class="logo-text">PokéDex</span>
        </a>
        <nav class="breadcrumb" aria-label="breadcrumb">
          <a routerLink="/">Tipi</a>
        </nav>
      </header>
      <main class="app-main">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex-app';
}
