import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models';
import { CategoryBadgeComponent } from '../../../../shared/category-badge/category-badge.component';

@Component({
  selector: 'app-project-hero',
  imports: [CategoryBadgeComponent],
  templateUrl: './project-hero.component.html',
  styleUrl: './project-hero.component.scss',
})
export class ProjectHeroComponent {
  project = input.required<Project | null>();
}
