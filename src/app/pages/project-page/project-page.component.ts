import { Component } from '@angular/core';
import { Project } from '../../data/project.model';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
  project!: Project;

  constructor(activatedRoute: ActivatedRoute, projectService: ProjectService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) this.project = projectService.getProjectById(params.id);
    });
  }
}
