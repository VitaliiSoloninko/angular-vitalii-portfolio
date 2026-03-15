
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  openMenu = false;

  closeMenu() {
    this.openMenu = false;
  }

  menuItems = [
    {
      name: 'Über mich',
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
