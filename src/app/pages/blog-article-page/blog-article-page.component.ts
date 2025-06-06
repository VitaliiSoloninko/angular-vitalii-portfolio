import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../data/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-blog-article-page',
  standalone: true,
  imports: [],
  templateUrl: './blog-article-page.component.html',
  styleUrl: './blog-article-page.component.scss',
})
export class BlogArticlePageComponent {
  project!: Project;
  projects: Project[] = [];

  constructor(
    activatedRoute: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {
    this.projects = this.projectService.getAll();
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.project = this.projectService.getProjectById(params.id);
    });
  }
}
