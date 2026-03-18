import { Component, computed, inject, signal } from '@angular/core';
import { ProjectService } from '../../../../core/services';
import { TagsComponent } from '../../../../shared/tags/tags.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TitleComponent } from '../../../../shared';

@Component({
  selector: 'app-portfolio',
  imports: [TagsComponent, ProjectListComponent, TitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  private readonly projectService = inject(ProjectService);

  private readonly currentTag = signal<string>('All');
  private readonly showCount = signal<number>(6);

  readonly allProjects = this.projectService.projects;

  readonly filteredProjects = computed(() => {
    const tag = this.currentTag();
    if (tag === 'All') {
      return this.allProjects();
    }
    return this.allProjects().filter((project) => {
      return Array.isArray(project.category)
        ? project.category.includes(tag)
        : project.category === tag;
    });
  });

  readonly displayedProjects = computed(() => {
    return this.filteredProjects().slice(0, this.showCount());
  });

  onTagSelected(tag: string): void {
    this.currentTag.set(tag);
    this.showCount.set(6);
  }

  showMore(): void {
    this.showCount.update((count) => count + 6);
  }
}
