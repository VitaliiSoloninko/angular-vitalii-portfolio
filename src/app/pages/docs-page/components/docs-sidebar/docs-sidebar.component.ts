import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DocsNavigationService,
  MenuItem,
} from '../../services/docs-navigation.service';

@Component({
  selector: 'app-docs-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './docs-sidebar.component.html',
  styleUrl: './docs-sidebar.component.scss',
})
export class DocsSidebarComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<void>();

  currentRoute$!: Observable<string>;

  constructor(private docsNavService: DocsNavigationService) {
    this.currentRoute$ = this.docsNavService.currentRoute$;
  }

  get menuItems(): MenuItem[] {
    return this.docsNavService.menuItems;
  }

  onNavClick(item: MenuItem): void {
    this.docsNavService.handleNavClick(item);
  }

  isActiveRoute(route?: string): boolean {
    return this.docsNavService.isRouteActive(route || '');
  }

  onClose(): void {
    this.close.emit();
  }

  onToggle(): void {
    this.toggle.emit();
  }
}
