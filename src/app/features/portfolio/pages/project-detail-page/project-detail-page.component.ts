import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ProjectService } from '../../../../core/services';
import { CategoryBadgeComponent } from '../../../../shared/category-badge/category-badge.component';
import { NavBarComponent } from '../../../../shared/nav-bar/nav-bar.component';
import { PageItemsComponent } from '../../../../shared/page-items/page-items.component';
import { ProjectDescriptionComponent } from '../../components/project-description/project-description.component';

@Component({
  selector: 'app-project-detail-page',
  imports: [
    PageItemsComponent,
    NavBarComponent,
    ProjectDescriptionComponent,
    CategoryBadgeComponent,
  ],
  templateUrl: './project-detail-page.component.html',
  styleUrl: './project-detail-page.component.scss',
})
export class ProjectDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly projectService = inject(ProjectService);

  readonly projects = this.projectService.projects;

  private readonly projectId = toSignal(
    this.route.params.pipe(map((params) => params['id'])),
    { initialValue: '' }
  );

  readonly project = computed(() => {
    const id = this.projectId();
    return id ? this.projectService.getProjectById(id) : null;
  });

  navigateTo(direction: number): void {
    const currentProject = this.project();
    if (!currentProject) return;

    const currentId = Number(currentProject.id);
    const ids = this.projects().map((p) => Number(p.id));
    const idx = ids.indexOf(currentId);
    const prevIdx = (idx + direction + ids.length) % ids.length;
    this.router.navigate(['/project', ids[prevIdx]]);
  }

  goToPrev(): void {
    this.navigateTo(-1);
  }

  goToNext(): void {
    this.navigateTo(1);
  }
}
