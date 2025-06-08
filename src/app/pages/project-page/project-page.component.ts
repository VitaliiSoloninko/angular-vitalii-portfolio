import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { PageItemsComponent } from '../../shared/page-items/page-items.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [PageItemsComponent, NavBarComponent, CommonModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
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

  goToPrevProject() {
    const currentId = Number(this.project.id);
    const ids = this.projects.map((p) => Number(p.id));
    const idx = ids.indexOf(currentId);
    const prevIdx = (idx - 1 + ids.length) % ids.length;
    this.router.navigate(['/project', ids[prevIdx]]);
  }

  goToNextProject() {
    const currentId = Number(this.project.id);
    const ids = this.projects.map((p) => Number(p.id));
    const idx = ids.indexOf(currentId);
    const nextIdx = (idx + 1) % ids.length;
    this.router.navigate(['/project', ids[nextIdx]]);
  }
}
