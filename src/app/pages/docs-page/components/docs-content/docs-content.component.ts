import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import {
  DocsNavigationService,
  QuickStartCard,
} from '../../services/docs-navigation.service';

@Component({
  selector: 'app-docs-content',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './docs-content.component.html',
  styleUrl: './docs-content.component.scss',
})
export class DocsContentComponent {
  currentRoute$: Observable<string>;
  quickStartCards: QuickStartCard[];

  constructor(private docsNavService: DocsNavigationService) {
    this.currentRoute$ = this.docsNavService.currentRoute$;
    this.quickStartCards = this.docsNavService.quickStartCards;
  }

  navigateToRoute(route: string): void {
    this.docsNavService.navigateToRoute(route);
  }

  isWelcomePage(route: string): boolean {
    return !route || route === '/docs' || route === '/docs/';
  }
}
