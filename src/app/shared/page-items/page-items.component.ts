import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../data/project.model';
import { ProjectService } from '../../services/project.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-page-items',
  standalone: true,
  imports: [NgFor],
  templateUrl: './page-items.component.html',
  styleUrl: './page-items.component.scss',
})
export class PageItemsComponent {
  project!: Project;
  projects: any;

  constructor(activatedRoute: ActivatedRoute, projectService: ProjectService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) this.project = projectService.getProjectById(params.id);
    });
  }
}
