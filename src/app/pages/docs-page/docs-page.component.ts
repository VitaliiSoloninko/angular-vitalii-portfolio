import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DocsContentComponent } from './components/docs-content/docs-content.component';
import { DocsSidebarComponent } from './components/docs-sidebar/docs-sidebar.component';
import { DocsNavigationService } from './services/docs-navigation.service';

@Component({
  selector: 'app-docs-page',
  standalone: true,
  imports: [CommonModule, DocsSidebarComponent, DocsContentComponent],
  templateUrl: './docs-page.component.html',
  styleUrl: './docs-page.component.scss',
})
export class DocsPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  sidebarOpen$!: Observable<boolean>;

  constructor(private docsNavService: DocsNavigationService) {
    this.sidebarOpen$ = this.docsNavService.sidebarOpen$;
  }

  ngOnInit() {
    // Инициализация компонента
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSidebarToggle() {
    this.docsNavService.toggleSidebar();
  }

  onSidebarClose() {
    this.docsNavService.closeSidebar();
  }
}
