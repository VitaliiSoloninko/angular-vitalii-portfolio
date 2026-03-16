import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProjectService } from '../../../../core/services';

@Component({
  selector: 'app-project-description',
  imports: [],
  templateUrl: './project-description.component.html',
  styleUrl: './project-description.component.scss',
})
export class ProjectDescriptionComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly projectService = inject(ProjectService);

  private readonly projectId = toSignal(
    this.route.params.pipe(map((params) => params['id'])),
    { initialValue: '' },
  );

  readonly project = computed(() => {
    const id = this.projectId();
    return id ? this.projectService.getProjectById(id) : null;
  });
}
