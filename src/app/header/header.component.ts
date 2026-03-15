import { Component } from '@angular/core';
import { MENU_ITEMS } from '../core/constants';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  openMenu = false;

  menuItems = MENU_ITEMS;

  closeMenu() {
    this.openMenu = false;
  }
}
