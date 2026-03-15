import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../../core/models';
import { ProjectService } from '../../../../core/services';

@Component({
  selector: 'app-project-description',
  imports: [],
  templateUrl: './project-description.component.html',
  styleUrl: './project-description.component.scss',
})
export class ProjectDescriptionComponent {
  project!: Project;
  projects: Project[] = [];

  constructor(activatedRoute: ActivatedRoute, projectService: ProjectService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) this.project = projectService.getProjectById(params.id);
    });
  }
}
