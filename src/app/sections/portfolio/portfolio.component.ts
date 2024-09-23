import { Component } from '@angular/core';
import { ItemsComponent } from './items/items.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ItemsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
