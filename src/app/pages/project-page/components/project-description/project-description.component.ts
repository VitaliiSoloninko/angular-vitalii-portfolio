import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../../../models/project.model';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'app-project-description',
  standalone: true,
  imports: [CommonModule],
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
