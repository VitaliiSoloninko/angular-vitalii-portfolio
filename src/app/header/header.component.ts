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
      name: 'Home',
      link: '',
    },
    {
      name: 'Portfolio',
      link: 'portfolio',
    },
    {
      name: 'Experience',
      link: 'experience',
    },
    {
      name: 'Skills',
      link: 'skills',
    },
    {
      name: 'Contacts',
      link: 'contacts',
    },
  ];
}
