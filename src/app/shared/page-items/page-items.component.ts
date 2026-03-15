import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../core/models';
import { ProjectService } from '../../core/services';

@Component({
  selector: 'app-page-items',
  imports: [],
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
