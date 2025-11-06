import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  readonly options = [
    {
      label: 'Inicio',
      link: '/',
      icon: 'home.svg',
    },
    {
      label: 'Explorar',
      link: '/explorar',
      icon: 'explore.svg',
    },
    {
      label: 'Comunidad',
      link: '/comunidad',
      icon: 'community.svg',
    },
    {
      label: 'Tus historias',
      link: '/tus-historias',
      icon: 'history.svg',
    },
    {
      label: 'Favoritos',
      link: '/favoritos',
      icon: 'favorites.svg',
    },
  ];
}
