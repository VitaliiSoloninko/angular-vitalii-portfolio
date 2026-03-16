import { Component, inject } from '@angular/core';
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
  private activatedRoute = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  project!: Project;
  projects: any;

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.project = this.projectService.getProjectById(params['id']);
    });
  }
}
