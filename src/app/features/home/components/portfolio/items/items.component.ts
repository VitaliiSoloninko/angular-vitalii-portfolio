import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../../../../core/services';
import { CategoryBadgeComponent } from '../../../../../shared/category-badge/category-badge.component';
import { TagsComponent } from '../../../../../shared/tags/tags.component';

@Component({
  selector: 'app-items',
  imports: [RouterLink, TagsComponent, CategoryBadgeComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
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
