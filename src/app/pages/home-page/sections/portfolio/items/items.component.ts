import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../../../../data/project.interface';
import { ProjectService } from '../../../../../services/project.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.projects = this.projectService.getAllProjectsBySearchTerm(
          params.searchTerm
        );
      else this.projects = projectService.getAll();
    });
  }
}
