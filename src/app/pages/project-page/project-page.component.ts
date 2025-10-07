import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { PageItemsComponent } from '../../shared/page-items/page-items.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [
    PageItemsComponent,
    NavBarComponent,
    CommonModule,
    ProjectDescriptionComponent,
  ],
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

  navigateTo(direction: number) {
    const currentId = Number(this.project.id);
    const ids = this.projects.map((p) => Number(p.id));
    const idx = ids.indexOf(currentId);
    const prevIdx = (idx + direction + ids.length) % ids.length;
    this.router.navigate(['/project', ids[prevIdx]]);
  }

  goToPrev() {
    this.navigateTo(-1);
  }

  goToNext() {
    this.navigateTo(1);
  }
}
