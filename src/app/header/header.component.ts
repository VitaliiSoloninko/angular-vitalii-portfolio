import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  openMenu = false;

  menuItems = [
    {
      name: 'Startseite',
      link: '',
    },
    {
      name: 'Portfolio',
      link: 'portfolio',
    },
    {
      name: 'Berufserfahrung',
      link: 'experience',
    },
    {
      name: 'Fähigkeiten',
      link: 'skills',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
  ];
}
