import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../../../../models/project.model';
import { ProjectService } from '../../../../../services/project.service';
import { TagsComponent } from '../../../../../shared/tags/tags.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [RouterLink, TagsComponent],
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
    activatedRoute: ActivatedRoute
  ) {
    this.allProjects = this.projectService.getAll();
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
