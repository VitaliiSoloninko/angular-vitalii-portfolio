import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../../../../data/project.model';
import { ProjectService } from '../../../../../services/project.service';
import { TagsComponent } from '../../../../../shared/tags/tags.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, TagsComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
  projects: Project[] = [];
  displayedProjects: Project[] = [];
  showCount = 6;

  constructor(
    private projectService: ProjectService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.projects = this.projectService.getAllProjectsBySearchTerm(
          params.searchTerm
        );
      else if (params.tag)
        this.projects = this.projectService.getAllProjectsByTag(params.tag);
      else this.projects = projectService.getAll();

      this.displayedProjects = this.projects.slice(0, this.showCount);
    });
  }

  showMore() {
    this.showCount += 6;
    this.displayedProjects = this.projects.slice(0, this.showCount);
  }
}
