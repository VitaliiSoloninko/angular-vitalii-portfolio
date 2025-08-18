import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  openMenu = false;

  closeMenu() {
    this.openMenu = false;
  }

  menuItems = [
    {
      name: 'Startseite',
      link: '#about',
    },
    {
      name: 'Portfolio',
      link: '#portfolio',
    },
    {
      name: 'Berufserfahrung',
      link: '#experience',
    },
    {
      name: 'Fähigkeiten',
      link: '#skills',
    },
  ];
}
