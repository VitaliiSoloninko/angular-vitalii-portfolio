import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../../../../core/models';
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
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  displayedProjects: Project[] = [];
  showCount = 6;
  currentTag = 'All';

  constructor(
    private projectService: ProjectService,
    activatedRoute: ActivatedRoute,
  ) {
    this.allProjects = this.projectService.projects();
    this.filteredProjects = this.allProjects;
    this.displayedProjects = this.filteredProjects.slice(0, this.showCount);
  }

  onTagSelected(tag: string) {
    this.currentTag = tag;
    if (tag === 'All') {
      this.filteredProjects = this.allProjects;
    } else {
      this.filteredProjects = this.allProjects.filter((project) => {
        return Array.isArray(project.category)
          ? project.category.includes(tag)
          : project.category === tag;
      });
    }

    this.showCount = 6;
    this.displayedProjects = this.filteredProjects.slice(0, this.showCount);
  }

  showMore() {
    this.showCount += 6;
    this.displayedProjects = this.filteredProjects.slice(0, this.showCount);
  }
}
